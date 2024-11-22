import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ProductReducer from "./ProductReducer";
import 'bootstrap/dist/css/bootstrap.min.css';


const rootReducer = combineReducers({
  UserReducer,
  ProductReducer,
 
});

export default rootReducer;
