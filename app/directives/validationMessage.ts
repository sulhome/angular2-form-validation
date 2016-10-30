import {Component, Input} from '@angular/core'
import {AbstractControl} from "@angular/forms";

@Component({
    selector: 'validation-message',
    host: {
        class: ''
    },
    template: `<div class="ui error small message error-message-container" [class.visible]="validationControl.hasError(validationName) && validationControl.touched">{{errorMessage}}</div>`
})
export class ValidationMessage {
    @Input() validationControl: AbstractControl
    @Input() validationName: string = ''
    @Input() errorMessage: string = ''
}
