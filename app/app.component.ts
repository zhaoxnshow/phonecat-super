// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello {{name}}</h1>`,
// })
// export class AppComponent  { name = 'Angular'; }
import { Component } from '@angular/core';

@Component({
  selector: 'phonecat-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent { }
