import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [UsuarioService, TrabajadorService]
})
export class LoginPage implements OnInit {

  data="";
  usuario="";
  password="";
  login_solicitante_data={
    _emailSolicitantes: "",
    _password: ""
  };
  login_trabajadores_data={
    _emailTrabajadores: "",
    _password: ""
  };
  mensaje=false;
  mensaje_contenido="";
  loader=false;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    public _usuarioService:UsuarioService,
    public _trabajadorService:TrabajadorService,
    private _ngZone:NgZone
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

  return(){
    this.router.navigate(['/switch']);
  }
  
  login(){
    if(this.data=="trabajador"){
      this._ngZone.run(()=>{
        this.login_trabajadores_data._emailTrabajadores=this.usuario;
        this.login_trabajadores_data._password=this.password;
        console.log(this.login_trabajadores_data);
        this.loader=true;
        this._trabajadorService.login(this.login_trabajadores_data).then(
          response=>{
            var respuesta:any=response;
            if(respuesta.length==2){
              localStorage.setItem('token_trabajador',response[1]);
              var usuario:any=respuesta[0].body;
              this.mensaje=false;
              this.mensaje_contenido="";
              localStorage.setItem('usuario_trabajador', JSON.stringify(usuario.data));
              this.loader=false;
              this.router.navigate(['/home-trabajador']);
            }else{
              this.loader=false;
              this.mensaje=true;
              this.mensaje_contenido=respuesta.error.message;
            }
          },
          error=>{
            console.log(error);
          })
      })
    }else if(this.data == "solicitante") {
      this._ngZone.run(()=>{
        this.login_solicitante_data._emailSolicitantes=this.usuario;
        this.login_solicitante_data._password=this.password;
        this.loader=true;
        this._usuarioService.login(this.login_solicitante_data).then(
          response=>{
            var respuesta:any=response;
            if(respuesta.length==2){
              localStorage.setItem('token_solicitante',response[1]);
              var usuario:any=respuesta[0].body;
              this.mensaje=false;
              this.mensaje_contenido="";
              localStorage.setItem('usuario_solicitante', JSON.stringify(usuario.data));
              this.loader=false;
              this.router.navigate(['/home']);
            }else{
              this.loader=false;
              this.mensaje=true;
              this.mensaje_contenido=respuesta.error.message;
            }
          },
          error=>{
            console.log(error);
          })
      })
    }
  }


  goRegistro(){
    this.router.navigate(['/registro'], { queryParams : {tipo:this.data}});
  }

}
