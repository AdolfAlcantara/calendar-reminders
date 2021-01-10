import {Reminder} from '../interfaces/remainderInterfaces'

//AddReminder
export const AddReminder = (reminder:Reminder) =>{
    type:"AddReminder"
    reminder
}