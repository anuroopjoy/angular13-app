import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [AppComponent, DynamicComponent],
  imports: [BrowserModule, FormsModule],
  providers: [{ provide: DATE_PIPE_DEFAULT_TIMEZONE, useValue: 'GMT' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
