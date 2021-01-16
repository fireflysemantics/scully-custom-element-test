import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<p [innerHTML]=html></p>',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  html:string = `
  <h1> Scully Custom Element Test</h1>
  <fs-image url="https://fireflysemantics.github.io/i/developer/instant-html-vscode.png"></fs-image>
  `
  constructor() { }

  ngOnInit(): void {
  }
}
