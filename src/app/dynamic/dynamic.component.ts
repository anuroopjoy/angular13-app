import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent implements OnInit {
  name = 'Test';
  max = 3;
  currentDate = new Date();
  constructor() {}

  ngOnInit(): void {}
  validate(): void {
    console.log(this.name);
  }
}
