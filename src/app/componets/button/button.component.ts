import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
   <button (click)="btnClicked.emit()" class=" hover:bg-slate-200  text-black font-bold py-2 px-5 rounded-2xl">
      {{label()}}

    </button>
  `,
  styles: ``
})
export class ButtonComponent {

  label = input('');

  btnClicked = output();
}
