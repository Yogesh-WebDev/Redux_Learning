import store from "./store";
import * as actions from "./actions";
import * as action from './actionTypes'


const unsubscribe=store.subscribe(() => {
    console.log("Store Changed",store.getState());
})

store.dispatch(actions.bugAdded("Bug 1"));

store.dispatch(actions.bugResolved(1));
unsubscribe();
store.dispatch({
    type: action.BUG_REMOVED,
    payload: {
        id:1
    }
});

console.log(store.getState());