import { api } from "./api";



export async function getPost() {
    let res = await api.get ("/posts");
    return res;
}
