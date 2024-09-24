import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
} from '@angular/core';

@Component({
  selector: 'input-signal-title',
  standalone: true,
  template: ` <p>
    Username is : <b>{{ title() }}</b>
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSignalComponent {
  title = input<String>();
}
