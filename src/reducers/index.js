import { reducer as form } from 'redux-form';
import CombineReducers from './combineReducers';

const appReducer = CombineReducers({
    form
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;