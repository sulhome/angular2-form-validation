import { NgModule } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBlogComponent } from './blogs/createBlog.component'
import { ValidationMessage } from './directives/validationMessage';
import { MarkdownPreview } from './directives/markdownPreview';

import { Datastore } from './services/datastore';
import { Logger } from './services/logger'

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add', component: CreateBlogComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
@NgModule({
    declarations: [
        DashboardComponent,
        CreateBlogComponent,
        ValidationMessage,
        MarkdownPreview,
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent],
    providers: [
        Datastore, Logger
    ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));