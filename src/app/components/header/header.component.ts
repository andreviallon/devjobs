import { Component } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'header',
  template: `
    <div class="header">
      <div class="flex-container">
        <h1 (click)="navigateHome()">Devjobs</h1>
        <dark-mode-toggle></dark-mode-toggle>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Dispatch() navigateHome = () => new Navigate(['/']);
}
