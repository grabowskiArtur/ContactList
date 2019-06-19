import { combineReducers } from "redux";
import { contacts } from "./contacts";
import { isLoaded } from './loading';

export default combineReducers({
	contacts,
	isLoaded
});