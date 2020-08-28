import { Injectable } from '@angular/core';

@Injectable()
export class ProductsServices{

    private products:Products[] = [
        {
            nombre: "PEPE Jeans",
            description: "Una amplia division con el compartimiento para notebook y organizador. Bolsillos laterales con cierres y maya. Doble bolsillos frontales. Tiras regulables, con espalda reforzada y acolchonada. Medidas Aproximadas: 45cm de Alto x 28cm de Ancho x 15cm de Profundo. ",
            img: "../../assets/icons/bag-01.jpg",
            fecha: "especial",
            precio:"1500"
          },
          {
            nombre: "DC SHOES",
            description: "Bolsillo largo al frente, con organizadores. Tiras regulagles, con espalda acolchonada y sistema de respiracion. Detalles de cintos laterales y frontal. Medidas Aproximadas: 41cm de Alto x 32cm de Ancho x 15cm de Profundo.",
            img: "../../assets/icons/bag-02.jpg",
            fecha: "especial",
            precio:"2000"
          },
          {
            nombre: "Total Black",
            description: "Compartimiento Principal de Gran Capacidad.Con Bolsillo Organizador Interno.Practico Bolsillo frontal.Posee Cierres Cubiertos.Bolsillo Laterales.Medidas 42 cm de alto x 30cm de ancho x 15 cm de profundidad.Material 100% Nylon.Portanetbook de 17",
            img: "../../assets/icons/bag-03.jpg",
            fecha: "comun",
            precio: "2100"
          },
          {
            nombre: "Black cuero",
            description: "Amplio Compartimiento central.Bolsillo Porta Notebook.3 Bolsillos Frontales.Bolsillos Laterales.Interior Forrado.Cierres Metálicos..Asa superior reforzada.Espalda y Tiras con sistema Air Mesh.Medidas 48cm de altox 38cm de ancho x 18 cm de profundidad",
            img: "../../assets/icons/bag-04.jpg",
            fecha: "especial",
            precio:"1900"
          },
          {
            nombre: "Casual",
            description: "Mochila con el balance perfecto de dinamismo y tamaño.Material:Poliéster.Compartimiento principal de gran capacidad . Compartimiento frontal con organizador.Tirantes acolchados con Airmesh Respaldo acolchado con Airmesh.Asa superior integrada a los tirantes. Bolsas laterales elásticas Pullers metálicos ",
            img: "../../assets/icons/bag-05.jpg",
            fecha: "comun",
            precio: "3000"
          },
          {
            nombre: "Munich",
            description: "Munich ha presentado su apuesta en el mundo de las mochilas con la Powerup Backpack, la cual integra una batería de 22.400 mAh y compartimentos especiales diseñados especialmente para cargar desde un portátil hasta tablets y smartphones.",
            img: "../../assets/icons/bag-06.jpg",
            fecha: "comun",
            precio: "2500"
          },
          {
            nombre: "COL COL",
            description: "Medidas: Alto: 41cm Ancho: 30cm Profundidad 5cm • Marca: COL COL • Volumen: 2 Lts * Color: Azul/Blanca * Apta para CAMPING * Liviana * Materiales: 420D 2MM R/S+900D pearl+600D/PU TPU * Sistema regulable en altura. * Cubremochila. * Bolsillo y salida para bolsa hidratación (No Incluida)",
            img: "../../assets/icons/bag-07.jpg",
            fecha: "comun",
            precio: "2000"
          }
        ];    

    constructor(){
        console.log("servicio listo");
    }

    getProducts(){
        return this.products;
    }

    getProduct(i: string){
      return this.products[i];
  }
}


export interface Products{
    nombre: string;
    description: string;
    img: string;
    fecha: string;
    precio: string;
};