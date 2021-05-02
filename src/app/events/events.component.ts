import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Event} from '../entities/Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  public events: Event[];


  constructor() { }

  ngOnInit(): void {
  }

}
