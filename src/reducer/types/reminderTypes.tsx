import {Reminder} from '../../interfaces/remainderInterfaces';

interface AddReminder {
    type:string,
    reminder:Reminder
};


export type ReminderActionTypes = AddReminder;