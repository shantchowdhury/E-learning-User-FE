import axios from "axios";
import Cookie from 'js-cookie';

const instance = axios.create({
    // baseURL: 'https://backend.nonacademy.org',
    baseURL: 'http://localhost:5000',
    // baseURL: 'http://3.87.57.109:3000',
    withCredentials: true,
    headers: {
        "Authorization": "Bearer " + Cookie.get('token'),
    }
})

// GET METHOD 
export const GET = function(endPoint){
   return instance.get(endPoint);
}

// POST METHOD 
export const POST = function(endPoint, data){
    return instance.post(endPoint, data, {
        headers: {'Content-type' : 'application/json'}
    })
}


// PUT METHOD 
export const PUT = function(endPoint, data){
    return instance.put(endPoint, data, {
        headers: {'Content-type' : 'application/json'}
    })
}


// DELETE 
export const DELETE = function(endPoint){
    return instance.delete(endPoint);
}


// FILE UPLOAD 
export const UPLOAD = function(endPoint, data){
    return instance.post(endPoint, data, {
        headers: {
            'Content-type' : 'multipart/form-data'
        }
    })
}
