import { Directive, OnInit } from '@angular/core';

@Directive()
export abstract class BaseComponent implements OnInit {
  ngOnInit(): void {
    this.init();
  }
  init() {}
}
