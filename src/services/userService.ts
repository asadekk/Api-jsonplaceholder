import { api } from "./api";
import { apiUsers } from "./api";


export async function getPost() {
    let res = await api.get ("/posts");
    return res;
}
export async function getUsers() {
    let res = apiUsers.get ("/users");
    return res
}