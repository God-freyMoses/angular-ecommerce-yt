import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, PrimaryButtonComponent],
  template: `
    <div class = "bg-slate-100 px-4 py-6 shadow-md flex justify-between items-center"> 
      <span class="text-2xl font-bold"> MY STORE!</span>
      <app-primary-button label="cart" (btnClicked)="showBtnClicked()"></app-primary-button>
    </div>
     
  
  `,
  styles: ``
})
export class HeaderComponent {


  showBtnClicked(){
    console.log("clicked");
  }

}
