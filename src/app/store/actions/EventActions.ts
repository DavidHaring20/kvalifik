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
  static DELETE_EVENT: string = 'DELETE_EVENT';


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

  addEvent(newEvent: Event) : void {
    this.eventService.saveEvent(newEvent).subscribe((result: any) => {
      console.log("result from saving");
      console.log(result);

      newEvent.eventId = result.name;

      this.ngRedux.dispatch({
        type: EventsActions.ADD_EVENT,
        payload: newEvent
      });
    });
  }

  updateEvent(updatedEvent: Event) : void {
    this.ngRedux.dispatch({
        type: EventsActions.UPDATE_EVENT,
        payload: updatedEvent
    });
  }

   deleteEvent (eventId: any) : void {
     this.ngRedux.dispatch({
      type: EventsActions.DELETE_EVENT,
      payload: eventId
    });
   }
}
