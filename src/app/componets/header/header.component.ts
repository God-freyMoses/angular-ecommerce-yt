import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, PrimaryButtonComponent, RouterLink],
  template: `
    <div class = "bg-slate-100 px-4 py-6 shadow-md flex justify-between items-center"> 
      <button routerLink="/" class="text-2xl font-bold"> MY STORE!</button>
      <app-primary-button [label]="'Cart ('  + cartService.cart().length + ')'"  routerLink="/cart" class="ml-4"/>
      
    </div>
     
  
  `,
  styles: ``
})
export class HeaderComponent {


  cartService= inject(CartService);

}
