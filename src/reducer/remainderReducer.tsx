import {Reminder, RemindersState} from '../interfaces/remainderInterfaces'
import {ReminderActionTypes} from './types/reminderTypes';

const defaultReminderState: RemindersState = 
{
    reminders:[]
};

const remainderReducer = (state=defaultReminderState,action:ReminderActionTypes): RemindersState =>{
    switch(action.type){
        case "AddReminder":
            return {
                reminders:[...state.reminders,action.reminder]
            }
        default:
            return state;
    }
}

export default remainderReducer;