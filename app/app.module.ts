import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    console.log('I am booting');
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}