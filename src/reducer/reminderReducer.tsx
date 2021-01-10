import {Reminder, RemindersState} from '../interfaces/remainderInterfaces'
import {ReminderActionTypes} from './types/reminderTypes';

const defaultReminderState: RemindersState = 
{
    reminders:[]
};

const reminderReducer = (state=defaultReminderState,action:ReminderActionTypes): RemindersState =>{
    switch(action.type){
        case "AddReminder":
            return {
                reminders:[...state.reminders,action.reminder]
            }
        case "EditReminder":
            return{
                reminders: state.reminders.map((reminder)=>{
                    if(reminder.id === action.reminder.id){
                        return {...reminder,...action.reminder};
                    }else{
                        return reminder;
                    }
                })   
            }
        default:
            return state;
    }
}

export default reminderReducer;