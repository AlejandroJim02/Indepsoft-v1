import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-home-trabajador',
  templateUrl: './home-trabajador.page.html',
  styleUrls: ['./home-trabajador.page.scss'],
  providers: [TrabajadorService]
})
export class HomeTrabajadorPage {

  numbers=[1,2,3,1,2,3,1,2];
  usuario:any;
  id={ _idTrabajadores:0 };
  datos:any={
    foto:"./assets/img/perfil.png"
  };
  loader=false;
  estrellas=[];
  sin_estrellas=[];

  constructor(
    private menu: MenuController,
    private router:Router,
    private _trabajadorService:TrabajadorService
  ) { }

  ionViewWillEnter() {
    this.usuario=JSON.parse(localStorage.getItem('usuario_trabajador'))
    console.log('usuario',this.usuario);
    this.listarDatosTrabajador();
  }

  listarDatosTrabajador(){
    this.loader=true;
    this.id._idTrabajadores=this.usuario.idTrabajadores;
    this._trabajadorService.listarDatos(this.id).then(
      response=>{
        var data_trabajador:any=response;
        console.log(data_trabajador);
        if(data_trabajador.code==200){
          this.datos=data_trabajador.perfil;
          console.log(this.datos);
          this.datos.nombre=this.datos.nombre.toLowerCase();
          this.datos.apellidoMaterno=this.datos.apellidoMaterno.toLowerCase();
          this.datos.apellidoPaterno=this.datos.apellidoPaterno.toLowerCase();
          this.calcularEstrellas(this.datos.calificacion);
          this.loader=false;
        }else if(data_trabajador.error.status=="Success, sin publicaciones"){
          console.log(data_trabajador);
          this.loader=false;
        }else{
          localStorage.clear();
          this.router.navigate(['/switch']);
          this.loader=false;
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  calcularEstrellas(cantidad_estrellas){
    this.estrellas.length=cantidad_estrellas;
    this.sin_estrellas.length=5-cantidad_estrellas;
  }

  verImagen(url, descripcion){
    console.log(url);
    console.log(descripcion);
    this.router.navigate(['/ver-imagen'],{ queryParams : {url:url, descripcion:descripcion}});
  }

  openMenu() {
    this.menu.enable(true, 'sidemenu-trabajador');
    this.menu.open('sidemenu-trabajador');
  }

  goPerfil(){
    this.menu.close('sidemenu-trabajador');
    this.router.navigate(['/perfil-trabajador']);
  }

  goCambiarPassword(){
    this.menu.close('sidemenu-trabajador');
    this.router.navigate(['/cambiar-password']);
  }

  goCerrarSesion(){
    this.menu.close('sidemenu-trabajador');
    localStorage.clear();
    this.router.navigate(['/switch']);
  }

}
