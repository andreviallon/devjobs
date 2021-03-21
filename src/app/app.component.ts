import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header></header>
    <div class="container">
      <job-list></job-list>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
