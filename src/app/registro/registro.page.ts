import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  providers: [UsuarioService, TrabajadorService]
})
export class RegistroPage implements OnInit {

  data="";
  dni="";
  dni_alert=false;
  datos_usuario:any={};
  rubro="";
  distrito="";
  celular;
  correo="";
  password="";
  password_repeat="";
  file:any;
  imgUrl:any="./assets/img/add.jpg";
  llenar_datos=true;
  llenar_mensaje="";
  dni_aux="";
  loader=false;
  data_registro_solicitante:any={};
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    public _usuarioService:UsuarioService,
    public _trabajadorService:TrabajadorService,
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
    console.log(this.data);
  }

  //Para mi yo del futuro, no te olvides de limpiar la data luego de registrar ;)

  obtenerDatos(dni){
    if(!/^[0-9]+$/.test(dni)){
      this.dni_alert=true;
    }else{
      this.loader=true;
      this._usuarioService.getDni(dni).then(data=>{
        console.log(data);
        this.datos_usuario=data;
        if(this.datos_usuario.dni){
          this.loader=false;
          console.log(this.datos_usuario);
          this.dni_alert=false;
          this.dni_aux=this.dni;
        }else{
          this.loader=false;
          this.dni_alert=true;
        }
      },
      error=>{
        this.loader=false;
        console.log(error);
      }
    )}
  }

  onFileSelect(event) {
    this.loader=true;
    if(event.target.files.length > 0) {
      this.file = event.target.files[0];
      //this.flag_img=true;
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event)=>{
        this.imgUrl = reader.result;
        this.loader=false;
      }
    }else{
      this.loader=false;
    }
  }

  register(){
    if(this.data=="solicitante"){
      if(this.verificarCampos("solicitante")){
        console.log("registrando solicitante");
        this.loader=true;
        this.data_registro_solicitante._nombre=this.datos_usuario.nombres;
        this.data_registro_solicitante._apellidoPaterno=this.datos_usuario.apellidoPaterno;
        this.data_registro_solicitante._apellidoMaterno=this.datos_usuario.apellidoMaterno;
        this.data_registro_solicitante._dni=this.dni;
        this.data_registro_solicitante._distrito=this.distrito;
        this.data_registro_solicitante._emailSolicitantes=this.correo;
        this.data_registro_solicitante._password=this.password;
        console.log(this.data_registro_solicitante);
        this._usuarioService.registrar(this.data_registro_solicitante).then(
          data=>{
            var response:any=data;
            this.data_registro_solicitante={};
            if(response.code==200){
              this.router.navigate(['/login'], { queryParams : {tipo:this.data}});
            }else{
              this.llenar_mensaje="Lo sentimos, ocurrió un problema con el registro."
            }
            console.log(data);
          },
          error=>{
            this.loader=false;
            console.log(<any>error);
          }
        )
      }
    }else if(this.data=="trabajador"){
      if(this.verificarCampos("trabajador")){
        console.log(this.datos_usuario);
        this.loader=true;
        this._trabajadorService.registrar
        (this.datos_usuario.nombres, this.datos_usuario.apellidoPaterno,this.datos_usuario.apellidoMaterno,this.dni,
          this.distrito,this.correo,this.password,this.celular, this.file).
          subscribe(
            data=>{
              console.log(data);
              var response:any=data;
              this.loader=false;
              this.file=null;
              this.dni="";
              this.datos_usuario={};
              this.distrito="";
              this.celular=null;
              this.correo="";
              this.password="";
              this.password_repeat="";
              if(response.code==200){
                this.router.navigate(['/login'], { queryParams : {tipo:this.data}});
              }else{
                this.llenar_mensaje="Lo sentimos, ocurrió un problema con el registro."
              }
            },
            error=>{
              this.loader=false;
              console.log(<any>error);
            }
          )
      }
    }else{
      console.log("no se puede registrar algo que no existe :p");
    }
  }

  verificarCampos(tipo){
    if(this.file || tipo=="solicitante"){
      if(this.dni.length==8 && !isNaN(parseInt(this.dni)) && this.dni_aux==this.dni ){
        if(this.distrito!== "" && (!isNaN(parseInt(this.celular)) && ((this.celular).toString()).length==9 || tipo=="solicitante")){
          if(/^\w+([\.-]?\w+)*@(?:|gmail)\.(?:|com|es)+$/.test(this.correo)){
            if(this.password===this.password_repeat){
              this.llenar_datos=false;
              return true;
            }else{
              this.llenar_datos=true;
              this.llenar_mensaje="Las contraseñas no coinciden.";
              return false;
            }
          }else{  
            this.llenar_datos=true;
            this.llenar_mensaje="Por favor ingrese un correo válido.";
            return false;
          }
        }else{
          this.llenar_datos=true;
          this.llenar_mensaje="Por favor complete los campos.";
          return false;
        }
      }else{
        this.llenar_datos=true;
        this.llenar_mensaje="El número de DNI no coincide o es incorrecto.";
        return false;
      }
    }else{
        this.llenar_datos=true;
        this.llenar_mensaje="Por favor agregue una foto de perfil.";
        return false;
    }
  }

  return(){
    this.router.navigate(['/login'], { queryParams : {tipo:this.data}});
  }

}

