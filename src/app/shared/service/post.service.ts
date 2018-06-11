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
