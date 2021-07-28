
import configureStore from './store/configureStore';
import * as actions from './store/api';
import { assignBugToUser,loadBugs} from './store/bugs';

const store = configureStore();

store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1,4)), 2000);

// import { turnOn } from "./store/module";
// turnOn();