import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';
import { AppState } from './store/Store';
import { Event } from './entities/Event';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends ApiService {

  constructor(private http: HttpClient, private ngRedux: NgRedux<AppState>) { 
    super();
  }
  saveEvent(event: Event) {
    const token = this.ngRedux.getState().users.token;
    const url = "https://kvalifik-b9a39-default-rtdb.firebaseio.com/events.json?auth=" + token;
    return this.http.post(url, event, this.getHttpOptions());
}
  
readEvent() {
    const token = this.ngRedux.getState().users.token;
    const url = "https://kvalifik-b9a39-default-rtdb.firebaseio.com/events.json?auth=" + token;
    return this.http.get(url, this.getHttpOptions());
  }
}
  


