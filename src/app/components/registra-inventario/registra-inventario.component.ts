import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../services/inventario.service';
import { ProductosInterface } from '../../interface/producto.interface';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registra-inventario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './registra-inventario.component.html',
  styleUrl: './registra-inventario.component.scss'
})
export class RegistraInventarioComponent implements OnInit{

  productos: ProductosInterface[] = [];
  inventarioForm: FormGroup;

  constructor(
    private inventarioService: InventarioService,
    private fb: FormBuilder,
    private router: Router
  ){
    this.inventarioForm = this.fb.group({
      nombreUsuario:  ['', Validators.required],
      numSerie:       ['', Validators.required],
      nombreProducto: ['', Validators.required],
      fechaCreate:    ['', Validators.required]
    });
  }
  

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getProductos();
  }

  getProductos(){
    this.inventarioService.getProductos().subscribe({
      next: (result) => {
        this.productos = result
      },
      error: (err) =>  {
        console.log(err);
      }
    })
  }

  onSubmit() {
    const formulario = this.inventarioForm.value;
    const data = {
      nombreUsuario:  formulario.nombreUsuario,
      numSerie:       formulario.numSerie,
      nombreProducto: formulario.nombreProducto,
      fechaCreate:    formulario.fechaCreate
    };

    this.inventarioService.postInventario(data).subscribe({
      next: (response: any) => {
        console.log('Inventario guardado exitosamente');
        this.router.navigateByUrl('/EntregaInventario');
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error al guardar el inventario', err);
      }
    });
  }

}
