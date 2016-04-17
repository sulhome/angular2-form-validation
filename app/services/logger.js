System.register(['humane', "angular2/core"], function(exports_1, context_1) {
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
    var HumaneLogger, core_1;
    var Logger;
    return {
        setters:[
            function (HumaneLogger_1) {
                HumaneLogger = HumaneLogger_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Logger = (function () {
                function Logger() {
                    this.humaneLogger = HumaneLogger;
                }
                Logger.prototype.error = function (message) {
                    this.humaneLogger.default.log(message, { addnCls: 'humane-libnotify-error' });
                };
                Logger.prototype.info = function (message) {
                    this.humaneLogger.default.log(message, { addnCls: 'humane-libnotify-info' });
                };
                Logger = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Logger);
                return Logger;
            }());
            exports_1("Logger", Logger);
        }
    }
});
//# sourceMappingURL=logger.js.map