import * as humane from 'humane-js';
import {Injectable} from "@angular/core";

@Injectable()
export class Logger {
    error(message):void {
        humane.log(message, {addnCls: 'humane-libnotify-error'});
    }

    info(message):void {
        humane.log(message, {addnCls: 'humane-libnotify-info'});
    }
}