import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-recuperar-cpassword',
  templateUrl: './recuperar-cpassword.page.html',
  styleUrls: ['./recuperar-cpassword.page.scss'],
  providers: [UsuarioService, TrabajadorService]
})
export class RecuperarCpasswordPage implements OnInit {

  data="";
  loader=false;
  nombres="";
  apematerno="";
  apepaterno="";
  dni;
  distrito="";
  celular="";
  correo="";
  new_password="";
  llenar_mensaje="";
  send_data:any={};
  llenar_datos=false;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private _usuarioService:UsuarioService,
    private _trabajadorService:TrabajadorService
  ) {
    this.route.queryParams.subscribe(params => {
      if(params && params.tipo){
        this.data=params.tipo;
      }
      else{
        this.router.navigate(['/switch']);
      }
    })
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.llenar_mensaje="";
    this.llenar_datos=false;
    this.limpiarFormulario();
  }

  sendNewPassword(){
    this.loader=true;
    this.send_data._dni=this.dni;
    this.send_data._nombre=this.nombres.toUpperCase();
    this.send_data._apellidoPaterno=this.apepaterno.toUpperCase();
    this.send_data._apellidoMaterno=this.apematerno.toUpperCase();
    this.send_data._distrito=this.distrito;
    this.send_data._nuevaContrasenia=this.new_password;
    if(this.data=="solicitante"){
      this.send_data._emailSolicitantes=this.correo;
      this._usuarioService.recuperarPasswordSolicitante(this.send_data).then(
        data=>{
          console.log(data);
          var response:any=data;
          if(response.code==200){
            this.llenar_datos=false;
            this.llenar_mensaje="Contraseña recuperada con éxito";
            this.limpiarFormulario();
          }else{
            this.llenar_datos=true;
            this.llenar_mensaje=response.error.message;
            this.limpiarFormulario();
          }
          this.loader=false;
        },
        error=>{
          this.loader=false;
          console.log(<any>error);
        }
      )
    }else{
      this.send_data._emailTrabajadores=this.correo;
      this.send_data._telefono=this.celular;
      this._trabajadorService.recuperarPasswordTrabajador(this.send_data).then(
        data=>{
          var response:any=data;
          if(response.code==200){
            this.llenar_datos=false;
            this.llenar_mensaje="Contraseña recuperada con éxito";
            this.limpiarFormulario();
          }else{
            this.llenar_datos=true;
            this.llenar_mensaje=response.error.message;
            this.limpiarFormulario();
          }
          this.loader=false;
        },
        error=>{
          this.loader=false;
          console.log(<any>error);
        }
      )
    }
  }

  limpiarFormulario(){
    this.nombres="";
    this.apematerno="";
    this.apepaterno="";
    this.dni="";
    this.distrito="";
    this.celular="";
    this.correo="";
    this.new_password="";
    this.send_data={};
  }

  return(){
    this.router.navigate(['/login'], { queryParams : {tipo:this.data}});
  }

}
