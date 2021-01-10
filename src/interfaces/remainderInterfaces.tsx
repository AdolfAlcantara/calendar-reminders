export type IDay = {
    date: Date;
}

export interface Reminder {
    id:string;
    date: Date;
    description:string;
    city:string;
    color:string;
}

export interface RemindersState {
    reminders: Reminder[]
  }