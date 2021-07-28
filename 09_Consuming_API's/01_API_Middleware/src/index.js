//
import configureStore from './store/configureStore'

const store = configureStore();
store.dispatch({
    type: 'apiCallBegan',
    payload: {
        url: '/bugs',
        onSuccess: 'bugsRecieved',
        onError:'apiRequestFailed'
    }
});
