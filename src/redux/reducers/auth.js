import {batch} from "react-redux";
import {Alert} from "react-native";
import ConstantType from "../constant-type";

const API ={}
const helper ={}
const {
    SET_TOKEN, SET_REFRESH_TOKEN, RESET_TOKENS, CHECK_COMPLETED, AUTH_SUCCESS, SET_CODEID, SET_MESSAGE,
    SET_IS_SUCCESS, SET_TOKEN_RG, SET_REFRESH_TOKEN_RG, SET_IS_PRELOAD,
    SET_PHONE_NUMBER, SET_PASSWORD, SET_FIO
} = ConstantType;

const initialState = {
    sessionToken: '',
    refreshToken: '',
    message: '',
    codeId: '',
    isAuth: false,
    token: null,
    errorCode: null,
    phone: "",
    password: '',
    response: "",
    fio: "",
    fieldsForm: {
        phone: '',
        password: '',
        name: '',
    }
};

const auth = (state = initialState, action) => {
    switch (action.type) {
  
        case SET_FIO: {
            return {
                ...state,
                fio: action.payload
            }
        }

        case SET_PASSWORD:
        case CHECK_COMPLETED:
        case AUTH_SUCCESS:
        case RESET_TOKENS:
        case SET_TOKEN:
        case SET_TOKEN_RG:
        case SET_REFRESH_TOKEN:
        case SET_REFRESH_TOKEN_RG:
        case SET_CODEID:
        case SET_MESSAGE:
        case SET_PHONE_NUMBER:
        case SET_IS_PRELOAD:
        case SET_IS_SUCCESS: {
            return { ...state, ...action.payload };
        }
        default: {
            return state;
        }
    }
};
export const checkIsAuth = (isAuth = true) => ({ type: AUTH_SUCCESS, payload: { isAuth } });
// 
export const setPhoneNumber = (phone)=> ({type: SET_PHONE_NUMBER, payload: { phone: `+7 ${phone}` }});
export const setPassword = (password)=> ({type: SET_PASSWORD, payload: { password }});
export const putFIO = (fio) => ({ type: SET_FIO, payload:  fio  });

export const setToken = (sessionToken) => ({ type: SET_TOKEN, payload: { sessionToken } });
export const setRefreshToken = (refreshToken) => ({ type: SET_REFRESH_TOKEN, payload: { refreshToken } });
export const resetTokens = (sessionToken = '', refreshToken = '') => ({type: RESET_TOKENS, payload: { sessionToken, refreshToken }});

export const setCodeId = (codeId) => ({ type: SET_CODEID, payload: { codeId } });
export const setMessageReg = (message) => ({ type: SET_MESSAGE, payload: { message } });







export const login = ({ input, password }) => {
    return authMethod(API.authLogin(helper.trim(`+7 ${input}`), password));
};

const authMethod = (method) => async (dispatch) => {
    try {
        const { data } = await method;
        batch(()=>{
            dispatch(setToken(data.token));
            dispatch(setRefreshToken(data.refreshToken));
        });
        helper.setToken(data.token, data.refreshToken);
        batch(()=>{
            dispatch(authCheck());
        });
        return 200;
    } catch (error) {
        const getMessage = (messages, title = 'Ошибка') => Alert.alert(title, messages);
        if (!error.response) {
            getMessage('Сервер не доступен');
            return;
        }
        const {response: {status}} = error;

        switch (status) {
            case 400: {
                return 400;
            }
            case 403: {
                getMessage('Доступ к этому ресурсу ограничен');
                return 403;
            }
            case 401:
            case 404: {
                getMessage('Неправильный логин или пароль');
                return 401;
            }
            case 500: {
                getMessage('На сервере возникла непредвиденная ошибка');
                return 500;
            }
            default:
                break;
        }
        if (status > 500) {
            getMessage('На сервере возникла непредвиденная ошибка');
        }
    }
};

export const authCheck = () => async (dispatch) => {
    // try {
        // let { status } = await API.authCheck();
        // if(status === 200){
            batch(()=>{
                dispatch(checkIsAuth());
                // dispatch(getProfile())
            })
        // } else if(status === 401) {
            // dispatch(checkIsAuth(false));
        // }
    // }
    // catch (err) {
        // dispatch(checkIsAuth(false));
    // }
};

export const requestOnRegistration = (phone, role = 'CLIENT') => async (dispatch) => {
    debugger
    try {
        let {
            data: { codeId, message },
        } = await API.requestRegistration({ ...{ phone: `+7 ${phone}`, role } });
        if (codeId && message) {
            dispatch(setCodeId(codeId));
            dispatch(setMessageReg(message));
            helper.notifications(message,'Успешно');
            debugger
            return 200;
        }
        helper.notifications('На сервере возникла непредвиденная ошибка');
        return 500;
    } catch (err) {
        helper.getError(err);
        return 400;
    }
};

export const confirmCode = (codeId, code, currentPath = "cabinet") => (dispatch, getState) => {
    return _authPredConfirmFunction(
        dispatch,
        getState,
        API.confirmRegistration({ codeId, code, currentPath }),
        currentPath
    );
};

const _authPredConfirmFunction = async (dispatch, getState, apiMethod) => {
    try {
        let {
            data: { token, refreshToken },
        } = await apiMethod;
        if (token && refreshToken) {
            batch(()=>{
                dispatch(setToken(token));
                dispatch(setRefreshToken(refreshToken));
            });
            batch(()=>{
                dispatch(authCheck());
            });
            return 200;
        }
        helper.notifications('На сервере возникла непредвиденная ошибка');
        return 500;
    } catch (err) {
        helper.getError(err);
        return 400;
    }
};

export const setFIO = (params) => async (dispatch, getState) => {
    try {
        dispatch(putFIO(params));
        return getState()
    } catch (e) {
        console.log(e)
    }
};


export const logout = () => async (dispatch, getState) => {
    const { isAuth } = getState().auth;
    try {
        batch(()=>{
            dispatch(checkIsAuth(!isAuth));
        });
    } catch (err) {
        // await helper.removeToken();
    }
};

export default auth
