import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Phone } from './core/phone/phone.service';
// import { routeParamsProvider } from './ajs-upgraded-providers';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';

@NgModule({
  imports: [
    BrowserModule,
    // UpgradeModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    Phone,
    // routeParamsProvider,
  ],
  declarations: [ 
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe,
  ],
  // entryComponents: [
  //   PhoneListComponent,
  //   PhoneDetailComponent,
  // ]
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  // constructor(private upgrade: UpgradeModule) { }
  // ngDoBootstrap() {
  //   console.log('I am booting');
  //   this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  // }
}