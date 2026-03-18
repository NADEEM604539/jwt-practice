import { PAYLOAD } from "../auth/model/payload";

export function login(data: PAYLOAD) {
    return fetch(('/auth/login'), {
        method: "POST",
        body: JSON.stringify(data),
    });
}


export function userDetails() {
    return fetch('/auth/login');
}