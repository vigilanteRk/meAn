import { Component } from '@angular/core';

@Component({
    selector: 'dustbox',
    template: `<h1>{{start}} My Name is {{profile.fname}}, I am {{profile.age}} year's old and i live in {{profile.address}}
    </h1>`
})

export class DustboxComponent {
    // name = 'Rajkumar';
    // age = 22;
    // address = 'kalyan';
    start = 1
    profile = {fname:'Rajkumar', age:22, address:'Kalyan'}

    constructor(){
        console.log('Hello World');
        this.start +=1;
        this.changed();
    }
    changed(){
        this.start +=1;
    }
}