
import { User } from "./User";

export class Event {
    eventId ;
    eventName : string;
    startTime : string;
    endTime :string;
    createdDate: Date;
    location: string;
    status: string;
    
}


export class UserVm {
    firstName: string;
    lastName: string;
    profileImage?: string;
}