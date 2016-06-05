import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CreateBlogComponent} from './blogs/createBlog.component'

@Component({
    selector: 'my-app',
    template: `
<div class="ui container main-container">
    <div class="ui two item green menu">
      <a class="item" [routerLink]="['Dashboard']" [class.active]="isActive(['Dashboard'])">Dashboard</a>
      <a class="item" [routerLink]="['Add']" [class.active]="isActive(['Add'])">Add new Blog</a> 
    </div>
    <div>
       <router-outlet></router-outlet>
    </div>
</div>
`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: "/",
        name: "root",
        redirectTo: ['Dashboard', "/dashboard"]
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent
    },

    {
        path: '/add',
        name: 'Add',
        component: CreateBlogComponent
    }
])
export class AppComponent {

    constructor(public router: Router) {
    }

    isActive(instruction: any[]): boolean {
        return this.router.isRouteActive(this.router.generate(instruction));
    }
}