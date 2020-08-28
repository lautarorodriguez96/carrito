import { Component, OnInit } from '@angular/core';
import { ProductsServices, Products } from './../../services/productos.services'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Products[] = [];

  constructor(private _products: ProductsServices,
              private router: Router ) { }

  ngOnInit(): void {
    this.products = this._products.getProducts();
  }

  ver(i){
    console.log(i)
    this.router.navigate(['/producto', i]);
  }

}
