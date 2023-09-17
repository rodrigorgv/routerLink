import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivoComponent } from './archivo/archivo.component';
import { EditarComponent } from './editar/editar.component';
import { InventariosComponent } from './inventarios/inventarios.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ListarInventarioComponent } from './listar-inventario/listar-inventario.component';
import { ListarProveedoresComponent } from './listar-proveedores/listar-proveedores.component';

const routes: Routes = [
  {path: 'archivo', component: ArchivoComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'inventarios', component: InventariosComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'inventario/listarInventario', component: ListarInventarioComponent},
  {path: 'proveedores/listarProveedores', component: ListarProveedoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
