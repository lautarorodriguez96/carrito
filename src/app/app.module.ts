import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//router
import { APP_ROUTING } from './app.routes'

//services
import { ProductsServices } from './services/productos.services'

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ProductsServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
