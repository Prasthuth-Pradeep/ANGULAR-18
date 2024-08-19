import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButton,
  MatAnchor,
  MatFabButton,
  MatFabAnchor,
  MatMiniFabButton,
  MatMiniFabAnchor,
  MatIconButton,
  MatIconAnchor,
} from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-button-2',
  standalone: true,
  imports: [
    MatButton,
    MatAnchor,
    MatFabButton,
    MatFabAnchor,
    MatMiniFabButton,
    MatMiniFabAnchor,
    MatIconButton,
    MatIconAnchor,
    MatIcon,
    MatTooltip,
    MatCheckbox,
    FormsModule,
  ],
  templateUrl: './button-2.component.html',
  styleUrl: './button-2.component.scss',
})
export class Button2Component {
  isDisabled = false;
  clickCounter = 0;
  toggleDisable = false;
  tooltipText = 'This is a button tooltip!';
  disabledInteractive = false;
}
