import { Component, Input } from '@angular/core';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

@Component({
  selector: 'app-button',
  template: `
    <button [ngClass]="buttonType" [disabled]="loading">
      <div class="flex">
      <span>{{ text }}</span>
        <div *ngIf="loading" class="lds-ring">
          <div></div>
        </div>
      </div>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() buttonType!: string;
  @Input() loading!: boolean | null;
}
