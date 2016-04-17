import { Component } from 'angular2/core';
import {Datastore} from './../services/datastore'
import {Blog} from './../blogs/blog'

@Component({
    selector:'dashboard',
    template:`<h3>Dashboard</h3>
<table class="ui orange table">
    <thead>
        <tr>
            <th>Title</th>
            <th>Tags</th>            
        </tr>
        <tr *ngFor="#blog of blogs">
            <td>{{blog.title}}</td>
            <td>{{blog.tags}}</td>
        </tr>
    </thead>   
</table>`
})

export class DashboardComponent {
    blogs : Blog[];
    constructor(private datastore:Datastore){
        this.blogs = this.datastore.getBlogs();
    }
}



