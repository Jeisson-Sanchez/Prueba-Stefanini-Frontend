import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistraInventarioComponent } from './components/registra-inventario/registra-inventario.component';
import { ListaInventarioComponent } from "./components/lista-inventario/lista-inventario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistraInventarioComponent, ListaInventarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PruebaStefanini';
}
