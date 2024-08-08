import { Routes } from '@angular/router';
import { RegistraInventarioComponent } from './components/registra-inventario/registra-inventario.component';
import { ListaInventarioComponent } from './components/lista-inventario/lista-inventario.component';

export const routes: Routes = [
    { path: 'RegistroInventario', component: RegistraInventarioComponent },
    { path: 'EntregaInventario', component: ListaInventarioComponent },
    { path: '', redirectTo: '/RegistroInventario', pathMatch: 'full' }, // Ruta por defecto
    { path: '**', redirectTo: '/RegistroInventario' } // Ruta no encontrada
];
