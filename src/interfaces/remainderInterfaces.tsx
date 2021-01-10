
export type IDay = {
    date: Date
}

export interface Reminder {
    date: Date;
    description:string;
    city:string;
    color:string;
}

export interface RemindersState {
    reminders: Reminder[]
  }