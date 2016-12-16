import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
    selector: 'my-app',
    template: `<h1>Technical Blog</h1>
    <p>User information:</p>
    <div><input type="text" [(ngModel)]="title" placeholder="Enter your name" id="txtName" name="txtName" />
    <button class="btn btn-primary" id="btnGo" (click)="buttonClick()">Go</button></div>
   <div><user-app>loading...</user-app></div>
  `,
})
export class AppComponent {
    title: string;

    constructor() {
        this.title = "My Blog";
    }

    buttonClick(): void {
        alert("Button clicked");
        this.title = "Button clicked";
    }

}