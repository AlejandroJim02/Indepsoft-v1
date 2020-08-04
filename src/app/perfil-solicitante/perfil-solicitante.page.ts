import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-perfil-solicitante',
  templateUrl: './perfil-solicitante.page.html',
  styleUrls: ['./perfil-solicitante.page.scss'],
  providers: [UsuarioService]
})
export class PerfilSolicitantePage implements OnInit {

  usuario:any;
  id_send:any={};
  datos_perfil:any={};
  loader=false;
  constructor(
    private router:Router,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.usuario=JSON.parse(localStorage.getItem('usuario_solicitante'));
    this.listarPerfil();
  }

  listarPerfil(){
    this.loader=true;
    this.id_send._idSolicitantes=this.usuario.idSolicitantes;
    this._usuarioService.verPerfil(this.id_send).then(
      data=>{
        var response:any=data;
        console.log(data);
        if(response.code==200){
          this.datos_perfil=response.data[0];
          console.log(this.datos_perfil);
          this.loader=false;
        }else{
          localStorage.clear();
          this.loader=false;
          this.router.navigate(['/switch']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  return(){
    this.router.navigate(['/home'])
  }

}
