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

  entregarInventario(inventario: InventarioInterface) {
    const updatedInventario = { ...inventario, estado: false }; 

    // console.log('ID del inventario:', inventario.id);
    // console.log('objeto:', inventario);
    // console.log('objeto2:', updatedInventario);

    this.inventarioService.putEstadoInventario(inventario.id,updatedInventario).subscribe({
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
