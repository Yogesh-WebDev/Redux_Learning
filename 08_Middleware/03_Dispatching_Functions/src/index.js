//
import configureStore from './store/configureStore'

const store = configureStore();
store.dispatch((dispatch, getState) => {
    store.dispatch({type:"bugReceived",bugs:[1,2,3]})   
});
