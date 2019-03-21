import {Component, Input} from "@angular/core";

@Component({
    selector: 'phone-name',
    template: `<h1>{{name}}</h1>`
})
export class PhoneNameComponent {
    @Input() name: string;
}
