//
import configureStore from './store/configureStore';
import * as actions from './store/api';
import { loadBugs } from './store/bugs';

const store = configureStore();

store.dispatch(loadBugs());
setTimeout(()=> store.dispatch(loadBugs()),2000);
