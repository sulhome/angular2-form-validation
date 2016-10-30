import {Component} from '@angular/core'
import {
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';

import * as _ from 'underscore';
import 'rxjs/add/operator/debounceTime';

import {Datastore} from './../services/datastore'
import {Blog} from "./blog";
import {Logger} from "../services/logger";

@Component({
    selector: 'create-blog',
    template: `<h3>Create blog</h3>
<form class="ui form" #createBlogForm="ngForm">
  <div class="field" [class.error]="!titleControl.valid && titleControl.touched">
    <label>Title</label>    
    <input type="text" placeholder="blog title" [formControl]="titleControl" />
    <validation-message [validationControl]="titleControl" [validationName]="'required'" 
    [errorMessage]="'Title is required'"></validation-message>    
  </div>
  <div class="field" [class.error]="!tagsControl.valid > 0 && tagsControl.touched">
    <label>Tags</label>
    <div class="tags-container">
      <a class="ui orange label" *ngFor="let tag of tags">{{tag}}<i (click)="removeTag(tag)" class="delete icon"></i></a>
    </div>
    <input type="text" placeholder="tags" [formControl]="tagsControl" (keyup)="onKey($event)" />    
    <validation-message [validationControl]="tagsControl" [validationName]="'tagsInvalid'" 
    [errorMessage]="'Tags is required'"></validation-message> 
  </div>   
  <div class="field" [class.error]="!blogTextControl.valid && blogTextControl.touched">
    <label>Blog Text</label>    
    <textarea [formControl]="blogTextControl"></textarea>    
    <validation-message [validationControl]="blogTextControl" [validationName]="'required'" 
    [errorMessage]="'Blog text is required'"></validation-message> 
  </div>   
  <div class="field">  
  <markdown-preview [markdownInput]="blogTextControl.value"></markdown-preview>   
  </div> 
  <button class="ui blue button" type="button" [disabled]="isFormValid()" (click)="createBlog()">
    Create Blog
  </button>  
</form>
`,
})
export class CreateBlogComponent {
    tags: string[];
    createBlogForm: FormGroup;
    titleControl: AbstractControl;
    tagsControl: AbstractControl;
    blogTextControl: AbstractControl;

    constructor(private formBuilder: FormBuilder, private datastore: Datastore, private loggerService: Logger) {
        this.tagsValidator = this.tagsValidator.bind(this);
        this.tags = [];
        this.createBlogForm = formBuilder.group({
            'title': ['', Validators.required],
            'tags': ['', this.tagsValidator],
            'blogText': ['', Validators.required]
        });
        this.titleControl = this.createBlogForm.controls['title'];
        this.tagsControl = this.createBlogForm.controls['tags'];
        this.blogTextControl = this.createBlogForm.controls['blogText'];
    }

    onKey(event: any) {

        if (event.keyCode === 13 && !this.tagExist(this.tagsControl.value)) {
            this.tags.push(event.target.value);
            (<AbstractControl>this.tagsControl).patchValue('');
        }
    }

    removeTag(tagToRemove: string) {
        this.tags = _.reject(this.tags, (tag) => tagToRemove === tag);
        this.tagsControl.updateValueAndValidity();
    }

    tagExist(tag: string): boolean {
        let exist = _.contains(this.tags, tag);
        if (exist) {
            this.loggerService.error(`tag ${tag} already exist`);
            return true;
        }
        return false;
    }

    tagsValidator(control: AbstractControl): any {
        if (this.tags && this.tags.length > 0) {
            return null;
        }
        return {'tagsInvalid': true};
    }

    isFormValid(){
        return !this.createBlogForm.valid;
    }

    createBlog() {        
        let blog = new Blog(this.titleControl.value, this.tags, this.blogTextControl.value, this.blogTextControl.value);
        this.datastore.createBlog(blog).then((result) => this.loggerService.info(`blog ${this.titleControl.value} was created`));
    }
}