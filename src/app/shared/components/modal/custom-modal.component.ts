import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrl: './custom-modal.component.scss',
  standalone: false
})
export class CustomModalComponent {
  
  constructor(){}
  @Input()
  public isOpen:boolean = false

  @Output()
  public onCloseModalEmitter = new EventEmitter<boolean>();

  closeModal(){
    const value = false;

    this.onCloseModalEmitter.emit(value);
    this.isOpen = value;
  }
}