import * as firebase from 'firebase'

const provider = new firebase.auth.FacebookAuthProvider();

export const facebookLogin = () => {
    return firebase.auth().signInWithPopup(provider).then(function (result) {
        const resultInfo = result.additionalUserInfo.profile;
        return ({
            firstName: resultInfo.first_name,
            lastName: resultInfo.last_name,
            email: resultInfo.email,
            photoUrl: result.user.photoURL
        });
    }).catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;

        console.log(errorCode, errorMessage, email, credential)
    });
};

