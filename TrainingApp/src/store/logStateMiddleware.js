const LogStateMiddleware = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState().auth);
    return result;
};

export default LogStateMiddleware;
