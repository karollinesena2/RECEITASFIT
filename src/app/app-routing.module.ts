import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { FrangosComponent } from './frangos/frangos.component';
import { CarnesComponent } from './carnes/carnes.component';


const routes: Routes = [
  {path: 'frangos', component: FrangosComponent },
  {path: 'carnes', component: CarnesComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
