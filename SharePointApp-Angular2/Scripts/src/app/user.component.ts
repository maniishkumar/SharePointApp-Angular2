import { Component } from '@angular/core';

@Component({
    selector: 'user-app',
    template: `<div><h3>User details will appear here</h3>
        <p>{{name}}</p>
    </div>`
})

export class UserComponent {
    name: string;

    constructor() {
        this.name = "Manish Kumar";
    }
}
