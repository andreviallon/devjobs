import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading-spinner',
  template: `
    <div class="lds-ring"><div>
  `,
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent{
}
