import {createStore} from 'redux';
import reminderReducer from '../reducer/reminderReducer'

export default () => createStore(reminderReducer);