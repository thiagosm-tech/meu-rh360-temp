import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  @Input() name!: string | undefined;
  @Output() startConfig: EventEmitter<void> = new EventEmitter<void>();

  emitStartConfigEvent(): void {
    this.startConfig.emit();
  }
}
