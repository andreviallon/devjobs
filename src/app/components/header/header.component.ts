import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="header">
      <div class="flex-container">
        <h1>devjobs</h1>
        <dark-mode-toggle></dark-mode-toggle>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
