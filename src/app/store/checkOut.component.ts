import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';

@Component({
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css']
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(
    public orderRepository: OrderRepository,
    public orderModel: Order
  ) {}

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.orderRepository.saveOrder(this.orderModel).subscribe(order => {
        this.orderModel.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
