import { Component, Input } from '@angular/core';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

@Component({
  selector: 'app-button',
  template: `
    <button [ngClass]="buttonType">{{ text }}</button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() buttonType!: string;

  ngOnInit() {
    console.log('buttonType', this.buttonType);
  }
}
