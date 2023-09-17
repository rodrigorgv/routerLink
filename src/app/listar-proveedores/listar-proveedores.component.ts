// listar-proveedores.component.ts
import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../providers.service'; // Asegúrate de que la importación sea correcta

@Component({
  selector: 'app-listar-proveedores',
  templateUrl: './listar-proveedores.component.html',
  styleUrls: ['./listar-proveedores.component.css']
})
export class ListarProveedoresComponent implements OnInit {
  proveedores: any[] = []; // Inicializado con un arreglo vacío para almacenar los proveedores

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.loadProveedores(); // Llama al método para cargar los proveedores
  }

  loadProveedores(): void {
    this.proveedores = this.providerService.getProviders(); // Obtén los proveedores desde el servicio
  }
}
