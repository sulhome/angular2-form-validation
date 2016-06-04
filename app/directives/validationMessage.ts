import {Component,Input} from 'angular2/core'
import {Control} from "angular2/common";

@Component({
    selector: 'validation-message',
    host: {
        class: ''
    },
    template: `<div class="ui error small message error-message-container" [class.visible]="validationControl.hasError(validationName) && validationControl.touched">{{errorMessage}}</div>`
})
export class ValidationMessage {
    @Input() validationControl:Control
    @Input() validationName:string = ''
    @Input() errorMessage:string = ''
}
