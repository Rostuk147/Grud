import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class PostService {
    constructor(private http: HttpClient){}

    getPost() {
        return this.http.get('http://localhost:3000/posts');
    } 

    addPost(postName: string, postColor: string, postPrice: number) {
        const data = {
            name: postName,
            color: postColor,
            price: postPrice
        }
        return this.http.post('http://localhost:3000/posts', data);
    }

    deletePost(post: any){
        return this.http.delete(`http://localhost:3000/posts/${post.id}`);
    }

    editPut(id, data) {
        return this.http.put(`http://localhost:3000/posts/${id}`,data);
    }

    createNewUser(user: User){
        return this.http.post('http://localhost:3000/users', user);
    }

    getUserByEmail(email){
        return this.http.get('http://localhost:3000/users');
    }
    
   

}