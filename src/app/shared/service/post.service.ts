import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import 'rxjs/add/operator/map';
import { Api } from '../api/api';

@Injectable()

export class PostService extends Api{
    constructor(public http: HttpClient){
        super(http);
    }

    getPost() {
        return this.get('posts')
    }

    getSinglePost(id){
      return this.get(`posts?id=${id}`)
        .map((user) => user[0] ? user[0] : undefined);
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

}
