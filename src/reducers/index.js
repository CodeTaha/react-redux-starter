/**
 * Created by taha on 9/11/17.
 */
import {combineReducers} from 'redux';
import courses from './course-reducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
