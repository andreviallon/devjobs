import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dark-mode-toggle',
  template: `
    <div class="container">
      <fa-icon [icon]="faSun"></fa-icon>
      <label class="switch">
        <input type="checkbox" checked>
        <span class="slider"></span>
      </label>
      <fa-icon [icon]="faMoon"></fa-icon>
    </div>
  `,
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent {
  @Input() darkMode!: boolean | null;
  @Output() toggleDarkMode = new EventEmitter<void>();

  public faMoon = faMoon;
  public faSun = faSun;

}
