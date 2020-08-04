import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contratos-solicitante',
  templateUrl: './contratos-solicitante.page.html',
  styleUrls: ['./contratos-solicitante.page.scss'],
})
export class ContratosSolicitantePage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  return(){
    this.router.navigate(['/home'])
  }

}
