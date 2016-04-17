System.register(['angular2/core', './../services/datastore'], function(exports_1, context_1) {
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
    var core_1, datastore_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (datastore_1_1) {
                datastore_1 = datastore_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(datastore) {
                    this.datastore = datastore;
                    this.blogs = this.datastore.getBlogs();
                }
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        template: "<h3>Dashboard</h3>\n<table class=\"ui orange table\">\n    <thead>\n        <tr>\n            <th>Title</th>\n            <th>Tags</th>            \n        </tr>\n        <tr *ngFor=\"#blog of blogs\">\n            <td>{{blog.title}}</td>\n            <td>{{blog.tags}}</td>\n        </tr>\n    </thead>   \n</table>"
                    }), 
                    __metadata('design:paramtypes', [datastore_1.Datastore])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map