import {Component, Input} from 'angular2/core'
import * as marked from 'marked';

@Component({
    selector: 'markdown-preview',
    template: `<label>Blog text preview</label>
    <p [innerHTML]="convertToHtml()"></p>`
})
export class MarkdownPreview {
    @Input() markdownInput:string;

    convertToHtml(){
        return  marked.parse(this.markdownInput);
    }
}
