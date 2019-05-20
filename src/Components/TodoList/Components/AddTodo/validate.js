const validate = values => {
    const errors = {};
    if (!values.get('description')) {
        errors.description = 'Required'
    }
    if (!values.get('taskType')) {
        errors.taskType = 'Required'
    }
    if (!values.get('place')) {
        errors.place = 'Required'
    }
    if (!values.get('bounty')) {
        errors.bounty = 'Required'
    }
    return errors
};

export default validate