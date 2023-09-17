import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private providers = [
    {
      id: 1,
      razonSocial: 'Proveedor A',
      direccion: 'Dirección A',
      nit: 'NIT A',
      estado: 'Activo'
    },
    {
      id: 2,
      razonSocial: 'Proveedor B',
      direccion: 'Dirección B',
      nit: 'NIT B',
      estado: 'Inactivo'
    }
  ];

  getProviders() {
    return this.providers;
  }
}
