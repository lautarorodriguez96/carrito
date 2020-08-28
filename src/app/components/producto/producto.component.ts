import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServices } from 'src/app/services/productos.services';

//declare var $: any;
import $ from 'jquery';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent {

  product: any = {};

  cart = false;
  cartDescription = true;
  delete = false;
  success = false;

  val = true;
  valDesc = false;
  valCant = false;
  valDiez = false;

  uno: number = 1;
  cuatro: number = 4;
  once: number = 11;
  descuento: number = 25;

  porcentaje: number;
  comun: number;
  fechaEspecial: number;
  precioDescuento: number;

  value: number = 1;
  precioTotal: number;
  precioCantidad: number;
  valor: number;

  productoComun;
  productoEspecial;

  constructor(private activatedRoute: ActivatedRoute,
    private _productsServices: ProductsServices) {

    this.activatedRoute.params.subscribe(params => {
      this.product = this._productsServices.getProduct(params['id']);
    })

    this.comun = Math.floor(this.product.precio * this.once - 100);

    if (this.product.fecha === "comun") {
      this.productoComun = this.product.fecha
    } else if (this.product.fecha === "especial") {
      this.productoEspecial = this.product.fecha
    }
    /*this.calcular*/

  }

  agregar() {
    this.cart = true;
    this.cartDescription = false;
  }

  btnDelete() {
    this.delete = true;
    this.cart = !this.cart;
  }

  btnConfirm() {
    this.cart = false;
    this.success = !this.success
  }

  setValue(id, valor) {
    let numero = valor
    if (id == '1') {
      this.value = numero;
      numero++;
    } else {
      if (numero <= 1) {
        alert("Debe tener algun elemento seleccionado");
      } else {
        numero--;
      }
    }
    this.value = numero;
  }

  calcular() {
    this.valor = this.value;
    this.productoComun;
    this.productoEspecial;

    if (this.value === 4) {
      this.porcentaje = Math.floor(this.product.precio * this.descuento / 100);
      this.precioDescuento = Math.floor((this.product.precio * this.value - this.porcentaje));
      this.val = false; 
      this.valCant = false; 
      this.valDesc = true; 
    }
      else if (this.value  > 10 ){
        if (this.productoEspecial) {
          this.fechaEspecial =  Math.floor(this.product.precio * this.value - 300 );
          this.val = false;  
          this.valDesc = false;      
          this.valCant = false;
          this.valDiez = true;
        }
        else {
          this.fechaEspecial =  Math.floor(this.product.precio * this.value - 100 );
          this.val = false;  
          this.valDesc = false;      
          this.valCant = false;
          this.valDiez = true;
        }
      }
      else{
        this.precioCantidad = Math.floor(this.value * this.product.precio );
        this.val = false;
        this.valDesc = false;      
        this.valCant = true;
        this.valDiez = false;
      }
  }
}
