import * as HumaneLogger from 'humane';
import {Injectable} from "angular2/core";

@Injectable()
export class Logger {
    // This is a hack to prevent tsc error
    private humaneLogger:any;

    constructor() {
        this.humaneLogger = HumaneLogger;
    }

    error(message):void {
        this.humaneLogger.default.log(message, {addnCls: 'humane-libnotify-error'});
    }

    info(message):void {
        this.humaneLogger.default.log(message, {addnCls: 'humane-libnotify-info'});
    }
}