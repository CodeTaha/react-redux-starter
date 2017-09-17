/**
 * Created by taha on 9/11/17.
 */
import {combineReducers} from 'redux';
import courses from './course-reducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
