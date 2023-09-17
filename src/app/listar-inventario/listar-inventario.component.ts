import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-listar-inventario',
  templateUrl: './listar-inventario.component.html',
  styleUrls: ['./listar-inventario.component.css']
})
export class ListarInventarioComponent implements OnInit {
  products: any[] = []; // Inicializado con un arreglo vacío

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
