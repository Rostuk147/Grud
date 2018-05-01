import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
    constructor(private http: HttpClient){}

    getPost(): Observable<any> {
        return this.http.get('http://localhost:3000/posts');
    } 

    addPost(postName: string, postColor: string) {
        const data = {
            name: postName,
            color: postColor
        }
        return this.http.post('http://localhost:3000/posts', data);
    }

    deletePost(post: any){
        return this.http.delete(`http://localhost:3000/posts/${post.id}`);
    }

    editPut(id, data) {
        return this.http.put('http://localhost:3000/posts/' + id, data);
    }
    
   

}