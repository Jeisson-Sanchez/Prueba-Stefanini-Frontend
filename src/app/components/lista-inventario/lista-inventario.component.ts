import { Component, OnInit } from '@angular/core';
import { InventarioInterface } from '../../interface/inventario.interface';
import { InventarioService } from '../../services/inventario.service';

@Component({
  selector: 'app-lista-inventario',
  standalone: true,
  imports: [],
  templateUrl: './lista-inventario.component.html',
  styleUrl: './lista-inventario.component.scss'
})
export class ListaInventarioComponent implements OnInit{

  inventarios: InventarioInterface[] = [];

  constructor(private inventarioService: InventarioService){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getInventarios();
  }

  getInventarios(){
    this.inventarioService.getinventarios().subscribe({
      next:(result) => {
        this.inventarios = result
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

  entregarInventario(idInventario: number) {
    this.inventarioService.putEstadoInventario(idInventario, 2).subscribe({
      next: (response) => {
        console.log('Estado del inventario actualizado');
        this.getInventarios(); 
      },
      error: (err) => {
        console.error('Error al actualizar el estado del inventario', err);
      }
    });
  }

}
