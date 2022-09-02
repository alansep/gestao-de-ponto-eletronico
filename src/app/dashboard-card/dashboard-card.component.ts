import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  @Input()
  public titulo: string = 'título';

  @Input()
  public valor: string = '20';

  @Input()
  public corTitulo: string = '#000';

  @Input()
  public corValor: string = '#000';

  constructor() { }

  ngOnInit(): void {
  }

}
