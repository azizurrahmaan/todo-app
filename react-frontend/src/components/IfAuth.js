import React from 'react';
import { useSelector } from "react-redux";
import AuthTokenService from '../services/AuthToken'

function AuthCheck(props) {
    const AuthToken = useSelector(state => state.auth.token || AuthTokenService.tokenInCookie() || AuthTokenService.tokenInLocalStorage());
    return AuthToken? props.children : props.otherwise
}

export default AuthCheck;