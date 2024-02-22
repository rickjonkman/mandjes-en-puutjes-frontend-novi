import {jwtDecode} from "jwt-decode";

export function checkExpirationJWT(jwtToken) {
    let decodedToken = jwtDecode(jwtToken);
    let currentDate = new Date();

    return decodedToken.exp * 1000 > currentDate.getTime();
}