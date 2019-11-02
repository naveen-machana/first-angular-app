import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // attribute selector
  //selector: '[app-servers]',
  // class selector
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  //template: `
  //  <app-server></app-server>
  //  <app-server></app-server>
  //`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  ngOnInit(): void {}
  addNewServer = false;

  constructor() {
    setTimeout(() => {
      this.addNewServer = true;
    }, 2000);
  }
}
