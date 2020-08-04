import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.page.html',
  styleUrls: ['./cambiar-password.page.scss'],
  providers: [UsuarioService, TrabajadorService]
})
export class CambiarPasswordPage implements OnInit {

  data="";
  loader=false;
  change_data:any={
    _dni: null,
    _password:"",
    _nuevaContrasenia:""
  };
  correo="";
  llenar_datos=true;
  llenar_mensaje="";
  constructor(
    private router:Router,
    private _usuarioService:UsuarioService,
    private _trabajadorService:TrabajadorService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.llenar_mensaje="";
    this.change_data={};
    if(localStorage.getItem('usuario_solicitante')){
      this.correo=JSON.parse(localStorage.getItem('usuario_solicitante')).emailSolicitantes;
      this.change_data._dni=JSON.parse(localStorage.getItem('usuario_solicitante')).dni;
      this.data="solicitante";
    }else{
      this.correo=JSON.parse(localStorage.getItem('usuario_trabajador')).emailTrabajadores;
      this.change_data._dni=JSON.parse(localStorage.getItem('usuario_trabajador')).dni;
      this.data="trabajador";
    }
  }

  changePassword(){
    this.loader=true;
    if(this.data=='solicitante'){
      this.change_data._emailSolicitantes=this.correo;
      this._usuarioService.cambiarPasswordSolicitante(this.change_data).then(
        data=>{
          console.log(this.change_data);
          var response:any=data;
          console.log(data);
          if(response.code==200){
            this.llenar_datos=false;
            this.llenar_mensaje="Contraseña actualizada con éxito";
          }else{
            this.llenar_datos=true;
            this.llenar_mensaje="Error al actualizar contraseña";
          }
          this.change_data={};
          this.change_data._dni=JSON.parse(localStorage.getItem('usuario_solicitante')).dni;
          this.loader=false;
        },
        error=>{
          this.loader=false;
          console.log(<any>error);
        }
      )
    }else{
      this.change_data._emailTrabajadores=this.correo;
      this._trabajadorService.cambiarPasswordTrabajador(this.change_data).then(
        data=>{
          console.log(data);
          var response_worker:any=data;
          if(response_worker.code==200){
            this.llenar_datos=false;
            this.llenar_mensaje="Contraseña actualizada con éxito";
          }else{
            this.llenar_datos=true;
            this.llenar_mensaje="Error al actualizar contraseña";
          }
          this.change_data={};
          this.change_data._dni=JSON.parse(localStorage.getItem('usuario_trabajador')).dni;
          this.loader=false;
        },
        error=>{
          this.loader=false;
          console.log(<any>error);
        }
      )
      console.log("aún no");
    }
  }

  return(){
    if (this.data == "solicitante") {
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/home-trabajador']);
    }
  }

}
