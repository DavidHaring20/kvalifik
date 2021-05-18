import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Event } from '../entities/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event: Event;

  constructor() { }

  ngOnInit(): void {
  }

}
