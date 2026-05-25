import { api } from "./api";



export async function getPost() {
    let res = await api.get ("/posts");
    return res;
}

export async function getTodo() {
    let res = await api.get("/todos")
    return res;
}

export async function getComment() {
    let res = await api.get("/comments")
    console.log(res);
    
    return res.data
}
export async function getUser(){
    let res = await api.get("/users")
    return res
}
export async function getPhotos(){
    let res = await api.get("/photos")
    return res
}