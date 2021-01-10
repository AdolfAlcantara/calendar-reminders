import {Reminder} from '../interfaces/remainderInterfaces'

//AddReminder
export const AddReminder = (reminder:Reminder) =>{
    type:"AddReminder"
    reminder
}

export const EditReminder = (reminder:Reminder) =>{
    type:"EditReminder"
    reminder
}