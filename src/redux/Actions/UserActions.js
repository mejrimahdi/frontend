
import { VERIFY_ADMIN, CURRENT_USER, DELETE_USER, ERROR_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, RESET_PASSWORD,UPDATE_USER_ROLE } from "../ActionsTypes/ActionType"
import axios from "axios"

export const verifyAdmin = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const config = {
            headers: { authorization: localStorage.getItem('token') }
        };
        const response = await axios.post("https://backend-v4un.onrender.com/api/user/current", config);
        
        // Vérifiez le rôle de l'utilisateur dans la réponse
        if (response.data.role === "admin") {
            dispatch({
                type: VERIFY_ADMIN,
                payload: true,
            });
        } else {
            dispatch({
                type: VERIFY_ADMIN,
                payload: false,
            });
        }
    } catch (error) {
        dispatch({
            type: ERROR_USER,
            payload: error,
        });
    }
};

export const loginUser=(email,password)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        const response= await axios.post('https://backend-v4un.onrender.com/api/user/login',{email,password})
        dispatch({
            type:LOGIN_USER,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_USER,
            payload:error
        })
    }
}

export const logoutUser=()=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        dispatch({
            type:LOGOUT_USER,
        })
    } catch (error) {
        dispatch({
            type:ERROR_USER,
            payload:error
        })
    }
}

export const registerUser=(newUser)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        const response=await axios.post('https://backend-v4un.onrender.com/api/user/register',newUser)
        dispatch({
            type:REGISTER_USER,
            payload:response.data
        })
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error.response ? error.response.data : error.message);
        dispatch({
            type:ERROR_USER,
            payload:error
        })
    }
}

export const deleteUser=(_id)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        const response= await axios.delete(`https://backend-v4un.onrender.com/api/user/delete/${_id}`)
        dispatch({
            type:DELETE_USER,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_USER,
            payload:error
        })
    }
}

export const resetPasswordUser=(_id,newPassword)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        const response=await axios.put(`https://backend-v4un.onrender.com/api/user/resetPassword/${_id}`,{newPassword})
        dispatch({
            type:RESET_PASSWORD,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_USER,
            payload:error
        })
    }
}

export const current=()=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        const config = {
            headers: {authorization: localStorage.getItem('token')}
        }
        const response=await axios.post("https://backend-v4un.onrender.com/api/user/current",config)
        dispatch({
            type:CURRENT_USER,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_USER,
            payload:error
        })
    }
}

export const updateUserRole = (userId, newRole) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const response = await axios.put(`https://backend-v4un.onrender.com/api/user/updateRole/${userId}`, { role: newRole });
        dispatch({
            type: UPDATE_USER_ROLE,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR_USER,
            payload: error,
        });
    }
};
