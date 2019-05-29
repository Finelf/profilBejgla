import {db} from '../App/firebaseConfig'

export const fetchTodos = () => {
    return db.collection('todos').get()
        .then(snapshot => {
            const newArray = [];
            snapshot.forEach(doc => {
                newArray.push({
                    id: doc.id,
                    ...doc.data()
                })
            });
            return newArray
        });
};

export const postTodoAsync = (payload) => {
    return db.collection('todos').add({
        ...payload
    }).then(docRef => {
        payload.id = docRef.id;
        return payload
    })
};
export const updateTodoAsync = (input, id) => {
    db.collection('todos').doc(id).update({
        description: input
    }).then(() => {
        return console.log('Successfully updated')
    }).catch( err => {
        console.log(err)
    })
};
export const toggleTodoAsync = (props) => {
    const {isDone, uid, id} = props;
    db.collection('todos').doc(id).update({
        isDone: !isDone,
        doneBy: isDone ? null : uid,
        doneDate: isDone ? null : Date.now()
    }).then(() => {
        return console.log('Success')
    }).catch( err => {
        console.log(err)
    })
};

export const deleteTodoAsync = (id) => {
    db.collection('todos').doc(id).delete().then(() => {
            return console.log('Successfully deleted')
        }
    )
};