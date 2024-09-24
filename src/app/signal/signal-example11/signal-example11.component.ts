import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { InputSignalComponent } from './input-signal-title.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signal-example11',
  standalone: true,
  templateUrl: './signal-example11.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    InputSignalComponent,
    FormsModule,
  ],
})
export default class SignalExample11Component {
  searchInput = signal('');
}
