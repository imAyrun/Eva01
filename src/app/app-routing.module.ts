import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'sesionuser',
    pathMatch: 'full'
  },
  {
    path: 'sesionuser',
    loadChildren: () => import('./sesionuser/sesionuser.module').then( m => m.SesionuserPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  {
    path: 'asistencias',
    loadChildren: () => import('./asistencias/asistencias.module').then( m => m.AsistenciasPageModule)
  },
  {
    path: 'regasistencia',
    loadChildren: () => import('./regasistencia/regasistencia.module').then( m => m.RegasistenciaPageModule)
  },
  {
    path: 'cambpassword',
    loadChildren: () => import('./cambpassword/cambpassword.module').then( m => m.CambpasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
