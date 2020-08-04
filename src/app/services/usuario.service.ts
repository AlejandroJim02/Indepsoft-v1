import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../services/global';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token=localStorage.getItem('token_solicitante');
  url_solicitante=GLOBAL.url_solicitante;
  url_trabajador=GLOBAL.url_trabajador;
  token_dni="?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFsZWphbmRyb2ptbnoxNkBnbWFpbC5jb20ifQ.UL5wXG224q20fBMy_7of1J2GwjLIfYUCuDfvkbi8unI";
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  header_token=new HttpHeaders({
    'Content-Type': 'application/json',
    'auth-token': this.token
  });
  
  constructor(
    public http: HttpClient
  ) { }

  //cambiar url
  getDni(dni){
    return new Promise(resolve=>{
      this.http.get("https://dniruc.apisperu.com/api/v1/dni/"+dni+this.token_dni).subscribe(data=>{
        resolve(data);
      },error=>{
        console.log("back");
        resolve(error);
      });
    });
  }

  login(datos){
    return new Promise(resolve=>{
      this.http.post(this.url_solicitante+"login-solicitante",datos, {headers:this.headers, observe:'response'} ).subscribe(
        data=>{
        if(data.headers.get('Auth-Token')){
          resolve([data ,data.headers.get('Auth-Token')]);
        }else{
          resolve(data);
        }
        },error=>{
          resolve(error);
        }
      )})
  }

  registrar(datos){
    return new Promise(resolve=>{
      this.http.post(this.url_solicitante+"registro-solicitante",datos, {headers:this.headers}).subscribe(
        data=>{
          resolve(data);
        },
        error=>{
          resolve(error);
        }
    )})
  }

  listarServiciosAll(){
    return new Promise(resolve=>{
      this.http.get(this.url_solicitante+"listar-servicios-trabajadores",{headers:this.header_token}).subscribe(
        data=>{
          resolve(data);
        },
        error=>{
          resolve(error);
        }
      )
    })
  }

  listarServiciosRubro(rubro){
    return new Promise(resolve=>{
      this.http.post(this.url_solicitante+"buscador-servicios-trabajadores",rubro, {headers:this.header_token}).subscribe(
        data=>{
          resolve(data);
        },
        error=>{
          resolve(error);
        }
    )})
  }

  listarDatosTrabajador(id){
    return new Promise(resolve=>{
      this.http.post(this.url_trabajador+"perfil-publico-trabajador",id,{headers:this.header_token}).subscribe(
        data=>{
          resolve(data);
        },
        error=>{
          resolve(error);
        }
      )
    })
  }

  verPerfil(id){
    return new Promise(resolve=>{
      this.http.post(this.url_solicitante+"perfil-solicitante",id,{headers:this.header_token}).subscribe(
        data=>{
          resolve(data);
        },
        error=>{
          resolve(error);
        }
      )
    })
  }

  recuperarPasswordSolicitante(data){
    return new Promise(resolve=>{
      this.http.put(this.url_solicitante+"recuperar-contrasenia",data).subscribe(
        data=>{
          resolve(data);
        },
        error=>{
          resolve(error);
        }
      )
    })
  }

  cambiarPasswordSolicitante(data){
    return new Promise(resolve=>{
      this.http.put(this.url_solicitante+"cambiar-contrasenia-solicitante",data, {headers: this.header_token}).subscribe(
        data=>{
          resolve(data);
        },
        error=>{
          resolve(error);
        }
      )
    })
  }

  /*empezarChat(id_solicitante){
    return new Promise(resolve=>{
      this.http.post("https://trabinde.herokuapp.com/empezar-chat",id_solicitante).subscribe(
        data=>{
          resolve(data);
        },
        error=>{
          resolve(error);
        }
      )
    })
  }*/
}
