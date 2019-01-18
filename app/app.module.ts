import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { Phone } from './core/phone/phone.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule,
  ],
  providers: [
    Phone,
  ],
  declarations: [ AppComponent ],
  // bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    console.log('I am booting');
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}