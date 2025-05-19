import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from "../../../componets/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
  <div class="bg-white shadow-md rounded-lg border-gray-200 p-6 flex flex-col ">
    <div class="mx-auto">
      <img [src] = "item().image" class="w-[100px] h-[100px] object-contain"/>

    </div>
    <div class="flex  mt-2 ">
      <div class="flex flex-col">
      <span class="text-md font-bold">{{item().title}}</span>
      <span class="text-sm ">{{'R' + item().price}}</span>
      </div>
      <div class="flex-1"></div>
      <app-button label="remove" (btnClicked)="cartService.removeFromCart(item().id)" class="mt-3"/>
   </div>
    
  
  </div>
  
  `,
  styles: ``
})
export class CartItemComponent {

  cartService = inject(CartService);
  item = input.required<Product>();

}
