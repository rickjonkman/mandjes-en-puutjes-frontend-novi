import {jwtDecode} from "jwt-decode";

export function getUsername(jwt) {
    return jwtDecode(jwt);
}