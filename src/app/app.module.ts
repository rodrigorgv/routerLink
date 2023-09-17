import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchivoComponent } from './archivo/archivo.component';
import { EditarComponent } from './editar/editar.component';
import { InventariosComponent } from './inventarios/inventarios.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ListarInventarioComponent } from './listar-inventario/listar-inventario.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarProveedoresComponent } from './listar-proveedores/listar-proveedores.component';


@NgModule({
  declarations: [
    AppComponent,
    ArchivoComponent,
    EditarComponent,
    InventariosComponent,
    ProveedoresComponent,
    ListarInventarioComponent,
    ListarProveedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
