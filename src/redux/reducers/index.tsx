import {combineReducers} from 'redux';
import LanguageReducer from './LanguageReducer';
import ThemeReducer from './ThemeReducer';
import UserReducer from './UserReducer';


export default combineReducers({
  // Define reducer
  language: LanguageReducer,
  themeData: ThemeReducer,
  user: UserReducer,
});
