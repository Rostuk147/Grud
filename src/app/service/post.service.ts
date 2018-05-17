import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import 'rxjs/add/operator/map';
import { BaseApi } from '../api/base-api';

@Injectable()

export class PostService extends BaseApi{
    constructor(public http: HttpClient){
        super(http);
    }

    getPost() {
        return this.get('posts')
    } 

    addPost(data) {
        return this.post('posts', data);
    }

    deletePost(post){
        return this.delete(`posts/${post.id}`);
    }

    editPut(id, data) {
        return this.put(`posts/${id}`,data);
    }

    createNewUser(user: User){
        return this.post('users', user);
    }

    getUserByEmail(email){
        return this.get(`users?email=${email}`)
        .map((user) => user[0] ? user[0] : undefined);
    }
    
}