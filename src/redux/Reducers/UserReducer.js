import { LOAD_USER, LOGIN_USER, REGISTER_USER, DELETE_USER, RESET_PASSWORD, ERROR_USER, CURRENT_USER, LOGOUT_USER, VERIFY_ADMIN } from "../ActionsTypes/ActionType";
import { toast } from "react-toastify";

const initialState = {
    load: false,
    user: null,
    isAdmin: false, // Ajoutez cette propriété pour suivre le statut admin
    error: null,
};

const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, load: true };
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            toast(payload.msg);
            return { ...state, user: payload.foundUser, load: false };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            toast("Logout successfully");
            return { ...state, user: null, isAdmin: false, load: false };
        case REGISTER_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, load: false, user: payload.newUser };
        case DELETE_USER:
            localStorage.removeItem("token");
            return { ...state, user: null, load: false };
        case RESET_PASSWORD:
            return { ...state, load: false };
        case ERROR_USER:
            return { ...state, error: payload, load: false };
        case CURRENT_USER:
            return { ...state, load: false, user: payload };
        case VERIFY_ADMIN:
            return { ...state, isAdmin: payload, load: false };
        default:
            return state;
    }
};

export default UserReducer;
