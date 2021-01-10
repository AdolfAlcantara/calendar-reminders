import React from 'react';
import {Reminder} from '../interfaces/remainderInterfaces';
import { ReminderActionTypes } from '../reducer/types/reminderTypes';

export interface IReminderContext{
    reminders:Reminder[];
    dispatch:React.Dispatch<ReminderActionTypes>;
}

const defaultContextValue = {
    reminders:[],
    dispatch:()=>null
}

const RemindersContext = React.createContext<IReminderContext>(defaultContextValue);

export {RemindersContext}

