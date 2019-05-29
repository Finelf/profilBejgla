import * as firebase from 'firebase'
import {auth, db, functions} from '../App/firebaseConfig'

const provider = new firebase.auth.FacebookAuthProvider();

export const isUserAuthorizedAsync = () => {
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(user => {
                if (user) {
                    user.getIdTokenResult()
                        .then(idTokenResult => {
                            resolve({
                                token: idTokenResult.claims.authorizedUser,
                                currentUid: user.uid
                            })
                        })
                        .catch(reject)
                } else {
                     resolve(false)
                }
            }
        );
    })
};
export const facebookLogin = () => {
    return auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            return auth.signInWithPopup(provider).then(result => {
                const resultInfo = result.additionalUserInfo.profile;
                const userObject = {
                    firstName: resultInfo.first_name,
                    lastName: resultInfo.last_name,
                    email: resultInfo.email,
                    photoUrl: result.user.photoURL,
                    uid: result.user.uid
                };
                db.collection('users')
                    .doc(result.user.uid)
                    .set(userObject);
                return userObject
            })
        }).catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;

            console.log(errorCode, errorMessage, email, credential)
        });
};
export const authorizeUserAsync = (props) => {
    const addAuthorizedUser = functions.httpsCallable('authorizeUser');
    addAuthorizedUser({email: props.payload}).then(data => {
        console.log("successfully authorized:", data)
    }).catch(err => {
        console.log(err.code, err.message, err.details)
    })
};
export const fetchAllUsersAsync = () => {
    return db.collection('users').get().then(snapshot => {
        return snapshot.docs.map(doc => doc.data())
    })
};
export const signOutUserAsync = () => {
    return auth.signOut().then(() => {
        return true
    }).catch(err => {
        return err
    });
};
