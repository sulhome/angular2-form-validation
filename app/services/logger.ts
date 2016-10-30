import * as humane from 'humane';
import {Injectable} from "@angular/core";

@Injectable()
export class Logger {
    error(message):void {
        humane.default.log(message, {addnCls: 'humane-libnotify-error'});
    }

    info(message):void {
        humane.default.log(message, {addnCls: 'humane-libnotify-info'});
    }
}