import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'switch',
    pathMatch: 'full'
  },
  {
    path: 'switch',
    loadChildren: () => import('./switch/switch.module').then( m => m.SwitchPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'perfil-solicitante',
    loadChildren: () => import('./perfil-solicitante/perfil-solicitante.module').then( m => m.PerfilSolicitantePageModule)
  },
  {
    path: 'perfil-trabajador',
    loadChildren: () => import('./perfil-trabajador/perfil-trabajador.module').then( m => m.PerfilTrabajadorPageModule)
  },
  {
    path: 'home-trabajador',
    loadChildren: () => import('./home-trabajador/home-trabajador.module').then( m => m.HomeTrabajadorPageModule)
  },
  {
    path: 'ver-trabajador',
    loadChildren: () => import('./ver-trabajador/ver-trabajador.module').then( m => m.VerTrabajadorPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'contratos-solicitante',
    loadChildren: () => import('./contratos-solicitante/contratos-solicitante.module').then( m => m.ContratosSolicitantePageModule)
  },
  {
    path: 'agregar-imagen-trabajador',
    loadChildren: () => import('./agregar-imagen-trabajador/agregar-imagen-trabajador.module').then( m => m.AgregarImagenTrabajadorPageModule)
  },
  {
    path: 'ver-imagen',
    loadChildren: () => import('./ver-imagen/ver-imagen.module').then( m => m.VerImagenPageModule)
  },
  {
    path: 'alert-modal',
    loadChildren: () => import('./modal/alert-modal/alert-modal.module').then( m => m.AlertModalPageModule)
  },
  {
    path: 'alert-trabajador-modal',
    loadChildren: () => import('./modal/alert-trabajador-modal/alert-trabajador-modal.module').then( m => m.AlertTrabajadorModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
