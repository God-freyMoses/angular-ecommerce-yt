import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button (click)="btnClicked.emit()" class="bg-blue-500 hover:opacity-90 text-white font-bold py-2 px-4 rounded-2xl">
      {{label()}}

    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input('');

  btnClicked = output();

  handleButtonClick(){
    this.btnClicked.emit();
  }

}
