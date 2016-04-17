System.register(['angular2/core', "angular2/common"], function(exports_1, context_1) {
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
    var core_1, common_1;
    var ValidationMessage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ValidationMessage = (function () {
                function ValidationMessage() {
                    this.validationName = '';
                    this.errorMessage = '';
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', common_1.Control)
                ], ValidationMessage.prototype, "validationControl", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ValidationMessage.prototype, "validationName", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ValidationMessage.prototype, "errorMessage", void 0);
                ValidationMessage = __decorate([
                    core_1.Component({
                        selector: 'validation-message',
                        host: {
                            class: ''
                        },
                        template: "<div class=\"ui error small message\" [class.visible]=\"validationControl.hasError(validationName) && validationControl.touched\">{{errorMessage}}</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ValidationMessage);
                return ValidationMessage;
            }());
            exports_1("ValidationMessage", ValidationMessage);
        }
    }
});
//# sourceMappingURL=validationMessage.js.map