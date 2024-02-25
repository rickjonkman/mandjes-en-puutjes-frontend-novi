import {jwtDecode} from "jwt-decode";

export function checkExpirationJWT() {
    let decodedToken = jwtDecode(localStorage.getItem('token'));
    let currentDate = new Date();

    return decodedToken.exp * 1000 > currentDate.getTime();
}