import React,{useState, useEffect, Dispatch} from 'react';
import DatePicker from "react-datepicker";
import {useLocation, useHistory} from 'react-router-dom';
import {Reminder} from '../interfaces/remainderInterfaces';
import {useDispatch} from 'react-redux';
import {ReminderActionTypes} from '../reducer/types/reminderTypes';
// import {RemindersContext,IReminderContext} from '../context/reminderContext';
import ColorPicker from 'react-pick-color';

const EditActivityForm: React.FC = (props) =>{
    const [startDate, setStartDate] = useState(new Date());
    const [reminder, setReminder] = useState<Reminder>({} as Reminder)
    const [color, setColor] = useState('#000');

    // const {dispatch} = useContext<IReminderContext>(RemindersContext);
    const dispatch = useDispatch<Dispatch<ReminderActionTypes>>();

    const location = useLocation<{ reminder:Reminder }>();
    const history = useHistory();


    useEffect(()=>{
        setStartDate(location.state.reminder.date);
        setColor(location.state.reminder.color);
        setReminder(location.state.reminder);
    }, [])

    const editReminderToState = (e:React.MouseEvent) =>{
        e.preventDefault();
        dispatch({
            type:"EditReminder",
            reminder:reminder
        });
        history.push('/');
    }

    return(
        <>
            <h1>Edit Reminder</h1>
            <form>
                
                <div className="form-group">
                    <label className="mr-3">Date</label>
                    <DatePicker 
                        selected={startDate} 
                        showTimeSelect dateFormat="Pp" 
                        onChange={(e:Date)=>{setStartDate(e);
                        setReminder({...reminder,date:e})}}/>
                </div>
                <div className="form-group">
                    <label>Reminder</label>
                    <input 
                        type="text" 
                        maxLength={30} 
                        className="form-control" 
                        placeholder={"Insert remainder"}
                        value = {reminder.description}
                        onChange={(e)=>setReminder({...reminder,description:e.target.value})}/>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text" 
                        value = {reminder.city}
                        className="form-control" 
                        placeholder={"Insert city"} 
                        onChange={(e)=>setReminder({...reminder,city:e.target.value})}/>
                </div>
                <ColorPicker 
                    color={color} 
                    onChange={(color)=>{
                                        setColor(color.hex);
                                        setReminder({...reminder,color:color.hex})}}/>
                <button 
                    type="submit"
                    className="btn btn-primary mt-3" 
                    onClick={(e)=>editReminderToState(e)}>
                        Edit
                </button>
            </form>
        </>
    )
}

export default EditActivityForm
