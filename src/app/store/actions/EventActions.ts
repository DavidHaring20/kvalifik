import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './../Store';
import { Event } from 'src/app/entities/Event';
import { EventsService } from 'src/app/events.service';

@Injectable({ providedIn: 'root'})
export class EventsActions{

    constructor(private ngRedux: NgRedux<AppState>, private eventService: EventsService)
    {}

  static ADD_EVENT: string = 'ADD_EVENT';
  static UPDATE_EVENT: string = 'UPDATE_EVENT';
  static READ_EVENTS: string = 'READ_EVENTS';


  readEvents() {
    this.eventService.readEvents().subscribe((result: any) => {
      console.log("result from server");
      console.log(result);

      let events: Event[] = [];
      for(let eventId in result) {
        let eventObj = result[eventId];
        eventObj.eventId = eventId;
        
        events.push(eventObj as Event);
      }

      this.ngRedux.dispatch({
        type: EventsActions.READ_EVENTS,
        payload: events
      });
    });
  }



}