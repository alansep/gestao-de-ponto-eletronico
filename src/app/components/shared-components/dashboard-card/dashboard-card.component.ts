import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent implements OnInit {
  @Input()
  public title: string = 'title';

  @Input()
  public value: string = '20';

  @Input()
  public titleColor: string = '#000';

  @Input()
  public valueColor: string = '#000';

  constructor() {}

  ngOnInit(): void {}
}
