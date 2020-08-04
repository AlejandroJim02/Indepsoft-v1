import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.page.html',
  styleUrls: ['./switch.page.scss'],
})
export class SwitchPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goSolicitante(){
    this.router.navigate(['/login'], { queryParams : {tipo:"solicitante"}});
  }

  goTrabajador(){
    this.router.navigate(['/login'], { queryParams : {tipo:"trabajador"}});
  }

}
