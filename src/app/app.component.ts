import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseComponent } from './base.component';
import { User } from './app.interface';
import { AppService } from './app.service';
import { DynamicComponent } from './dynamic/dynamic.component';
import { CoreService } from 'core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent {
  title = 'angular13-app';
  @ViewChild('placeholder', { read: ViewContainerRef, static: true })
  placeholder!: ViewContainerRef;
  constructor(private service: AppService, private coreService: CoreService) {
    super();
  }
  override async init() {
    // child override
    const user: User = {
      type: 'admin',
    };
    user['name'] = 'root';
    const result = await this.service.getUser();
    console.log(result);
    this.placeholder.createComponent(DynamicComponent);
  }
}
