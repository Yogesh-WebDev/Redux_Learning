//
import configureStore from './store/configureStore'
import { bugAdded,bugResolved,getUnresolvedBugs,bugAssignedToUser,getBugsByUser}from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';

const store = configureStore();

store.subscribe(() => {
    console.log("Store changed");
})

store.dispatch(userAdded({ name: 'user1' }));
store.dispatch(userAdded({ name: 'user2' }));
store.dispatch(userAdded({ name: 'user3' }));
store.dispatch(projectAdded({ name: 'yogesh' }));
store.dispatch(bugAdded({description: "Bug 1"})); 
store.dispatch(bugAdded({description: "Bug 2"})); 
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
store.dispatch(bugResolved({id:1})); 

const bugs = getBugsByUser(1)(store.getState());
const unresolvedBugs = getUnresolvedBugs(store.getState());
console.log(bugs);