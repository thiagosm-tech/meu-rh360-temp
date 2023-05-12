import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.3s', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('0.3s', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class ModalComponent {
  @Input() modalOpen: boolean = false;
  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
