import { tassign } from 'tassign';
import { EventState } from '../Store';
import { EventsActions } from '../actions/EventActions';
import { Event } from 'src/app/entities/Event';


export const events = [
    {eventId :'1',eventName :'Winter Pride',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Søborg, Copenhagen',status:'published'} as Event,
    {eventId :'2',eventName :'Winter Pride',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Lyngby, Copenhagen',status:'published'} as Event,
    {eventId :'1',eventName :'Winter Pride',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Valby, Copenhagen',status:'published'} as Event,
    {eventId :'1',eventName :'Winter Pride',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Nørrebro, Copenhagen',status:'published'} as Event,
    {eventId :'1',eventName :'Winter Pride',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Lygten, Copenhagen',status:'published'} as Event
  ];

  const EVENT_INITIAL_STATE: EventState = {eventId :'0' ,eventName :'Pride',startTime : '00:00',endTime :'00:00',createdDate:new Date(2021 , 1, 1),location:'Copenhagen',status:' not published'};

export function eventsReducer(state: EventState = EVENT_INITIAL_STATE, action: any) {
    switch (action.type) {
       case EventsActions.READ_EVENTS:
           return tassign(state, {events: action.payload});
    }
}
