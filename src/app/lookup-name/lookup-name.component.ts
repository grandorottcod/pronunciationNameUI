import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lookup-name',
  templateUrl: './lookup-name.component.html',
  styleUrls: ['./lookup-name.component.css']
})
export class LookupNameComponent implements OnInit {

  name: string;

  constructor() { this.name = "" }

  ngOnInit(): void {
  }

}
