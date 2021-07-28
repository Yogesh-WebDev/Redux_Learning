//
import configureStore from './store/configureStore';
import * as actions from './store/api';
import { addBug} from './store/bugs';

const store = configureStore();

store.dispatch(addBug({description: "a"}));

