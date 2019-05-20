import {db} from '../App/firebaseConfig'

export const fetchTodos = () => {
    return db.collection("todos").get()
        .then(querySnapshot => {
            const newArray = [];
            querySnapshot.forEach(doc => {
                newArray.push({
                    id: doc.id,
                    ...doc.data()
                })
            });
            return newArray
        });
};

export const postTodoAsync = (payload) => {
    let todoObject = {
        payload
    };
    return db.collection("todos").add({
        todoObject
    }).then(docRef => {
        todoObject.id = docRef.id;
        return todoObject
    })
};
export const updateTodoAsync = (input, id) => {
    // return axios.post(apiUrl + '/' + id, {
    //     text:input,
    //     id: id
    // })
};
export const completeTodoAsync = (id) => {
    // return axios.post(apiUrl + '/' + id + '/complete', {id: id})
};
export const incompleteTodoAsync = (id) => {
    // return axios.post(apiUrl + '/' + id + '/incomplete', {id: id})
};

export const deleteTodoAsync = (id) => {
    // return axios.delete(apiUrl + '/' + id)
};