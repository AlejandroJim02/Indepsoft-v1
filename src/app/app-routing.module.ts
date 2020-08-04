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
    path: 'recuperar-cpassword',
    loadChildren: () => import('./recuperar-cpassword/recuperar-cpassword.module').then( m => m.RecuperarCpasswordPageModule)
  },
  {
    path: 'cambiar-password',
    loadChildren: () => import('./cambiar-password/cambiar-password.module').then( m => m.CambiarPasswordPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
