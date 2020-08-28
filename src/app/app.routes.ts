import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductoComponent } from './components/producto/producto.component';

const APP_ROUTES: Routes = [
    
        { path: 'home', component: HomeComponent },
        { path: 'producto/:id', component: ProductoComponent },
        { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);