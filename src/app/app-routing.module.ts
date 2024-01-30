import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'operations', pathMatch: 'full' },
  {
    path: 'operations',
    loadChildren: () => import('./shared/employee/operations.module').then(m => m.OperationsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
