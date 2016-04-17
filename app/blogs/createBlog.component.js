System.register(['angular2/core', 'underscore', 'rxjs/add/operator/debounceTime', './../services/datastore', './../directives/markdownPreview', './../directives/validationMessage', 'angular2/common', "./blog", "../services/logger"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, _, datastore_1, markdownPreview_1, validationMessage_1, common_1, blog_1, logger_1;
    var CreateBlogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {
                _ = _1;
            },
            function (_2) {},
            function (datastore_1_1) {
                datastore_1 = datastore_1_1;
            },
            function (markdownPreview_1_1) {
                markdownPreview_1 = markdownPreview_1_1;
            },
            function (validationMessage_1_1) {
                validationMessage_1 = validationMessage_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (blog_1_1) {
                blog_1 = blog_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            }],
        execute: function() {
            CreateBlogComponent = (function () {
                function CreateBlogComponent(formBuilder, datastore, loggerService) {
                    this.formBuilder = formBuilder;
                    this.datastore = datastore;
                    this.loggerService = loggerService;
                    this.tagsValidator = this.tagsValidator.bind(this);
                    this.tags = [];
                    this.createBlogForm = formBuilder.group({
                        'title': ['', common_1.Validators.required],
                        'tags': ['', this.tagsValidator],
                        'blogText': ['', common_1.Validators.required]
                    });
                    this.titleControl = this.createBlogForm.controls['title'];
                    this.tagsControl = this.createBlogForm.controls['tags'];
                    this.blogTextControl = this.createBlogForm.controls['blogText'];
                }
                CreateBlogComponent.prototype.onKey = function (event) {
                    if (event.keyCode === 13 && !this.tagExist(this.tagsControl.value)) {
                        this.tags.push(event.target.value);
                        this.tagsControl.updateValue('');
                    }
                };
                CreateBlogComponent.prototype.removeTag = function (tagToRemove) {
                    this.tags = _.reject(this.tags, function (tag) { return tagToRemove === tag; });
                    this.tagsControl.updateValueAndValidity();
                };
                CreateBlogComponent.prototype.tagExist = function (tag) {
                    var exist = _.contains(this.tags, tag);
                    if (exist) {
                        this.loggerService.error("tag " + tag + " already exist");
                        return true;
                    }
                    return false;
                };
                CreateBlogComponent.prototype.tagsValidator = function (control) {
                    if (this.tags && this.tags.length > 0) {
                        return null;
                    }
                    return { 'tagsInvalid': true };
                };
                CreateBlogComponent.prototype.createBlog = function () {
                    var _this = this;
                    var blog = new blog_1.Blog(this.titleControl.value, this.tags, this.blogTextControl.value, this.blogTextControl.value);
                    this.datastore.createBlog(blog).then(function (result) { return _this.loggerService.info("blog " + _this.titleControl.value + " was created"); });
                };
                CreateBlogComponent = __decorate([
                    core_1.Component({
                        selector: 'create-blog',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, markdownPreview_1.MarkdownPreview, validationMessage_1.ValidationMessage],
                        template: "<h3>Create blog</h3>\n<form class=\"ui form\" [ngFormModel]=\"createBlogForm\">\n  <div class=\"field\" [class.error]=\"!titleControl.valid && titleControl.touched\">\n    <label>Title</label>    \n    <input type=\"text\" placeholder=\"blog title\" [ngFormControl]=\"titleControl\" />\n    <validation-message [validationControl]=\"titleControl\" [validationName]=\"'required'\" \n    [errorMessage]=\"'Title is required'\"></validation-message>    \n  </div>\n  <div class=\"field\" [class.error]=\"!tagsControl.valid > 0 && tagsControl.touched\">\n    <label>Tags</label>\n    <div class=\"tags-container\">\n      <a class=\"ui orange label\" *ngFor=\"#tag of tags\">{{tag}}<i (click)=\"removeTag(tag)\" class=\"delete icon\"></i></a>\n    </div>\n    <input type=\"text\" placeholder=\"tags\" [ngFormControl]=\"tagsControl\" (keyup)=\"onKey($event)\" />\n    <div class=\"ui error small message\" [class.visible]=\"tagsControl.hasError('tagsInvalid') && tagsControl.touched\">Tags is required</div>\n  </div>   \n  <div class=\"field\" [class.error]=\"!blogTextControl.valid && blogTextControl.touched\">\n    <label>Blog Text</label>    \n    <textarea [ngFormControl]=\"blogTextControl\"></textarea> \n    <div class=\"ui error small message\" [class.visible]=\"blogTextControl.hasError('required') && blogTextControl.touched\">Blog text is required</div>\n  </div>   \n  <div class=\"field\">  \n  <markdown-preview [markdownInput]=\"blogTextControl.value\"></markdown-preview>   \n  </div> \n  <button class=\"ui blue button\" type=\"button\" [class.disabled]=\"!createBlogForm.valid\" (click)=\"createBlog()\">Create Blog</button>  \n</form>\n",
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, datastore_1.Datastore, logger_1.Logger])
                ], CreateBlogComponent);
                return CreateBlogComponent;
            }());
            exports_1("CreateBlogComponent", CreateBlogComponent);
        }
    }
});
//# sourceMappingURL=createBlog.component.js.map