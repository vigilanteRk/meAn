import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `<h1>Hello World {{name}} </h1>`
})

export class SandboxComponent {
    name = 'Rajkumar';
}
