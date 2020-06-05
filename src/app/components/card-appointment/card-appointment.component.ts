import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-appointment',
  templateUrl: './card-appointment.component.html',
  styleUrls: ['./card-appointment.component.scss'],
})
export class CardAppointmentComponent implements OnInit {

  @Input() text:string;
  @Input() title:string;
  @Input() date:string;
  @Input() amount:number;

  isOpen = false

  constructor() { }

  ngOnInit() {}

}
