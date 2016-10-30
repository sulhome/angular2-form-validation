import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<div class="ui container main-container">
    <div class="ui two item green menu">
      <a class="item" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a class="item" routerLink="/add" routerLinkActive="active">Add new Blog</a> 
    </div>
    <div>
       <router-outlet></router-outlet>
    </div>
</div>`
})

export class AppComponent {
}