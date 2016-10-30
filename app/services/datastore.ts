import {Injectable} from '@angular/core';
import {Blog} from './../blogs/blog'

@Injectable()
export class Datastore {
    blogs: Blog[]
    constructor(){
        this.blogs = [];
    }

    createBlog (blog: Blog): Promise<any> {
        return new Promise((resolve,reject) => {
            this.blogs.push(blog);
            resolve(true);
        });
    }
    
    getBlogs():Blog[]{
        return this.blogs;
    }
}
