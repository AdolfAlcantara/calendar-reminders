import React,{useState, useEffect, Dispatch} from 'react';
import DatePicker from "react-datepicker";
import {useLocation, useHistory} from 'react-router-dom';
import {Reminder} from '../interfaces/remainderInterfaces';
import {useDispatch} from 'react-redux';
import {ReminderActionTypes} from '../reducer/types/reminderTypes';
// import {RemindersContext,IReminderContext} from '../context/reminderContext';
import ColorPicker from 'react-pick-color';
import {v4 as uuidv4} from 'uuid';


const AddActivityForm: React.FC = () =>{
    const [startDate, setStartDate] = useState(new Date());
    const [reminder, setReminder] = useState<Reminder>({} as Reminder)
    const [color, setColor] = useState('#000');

    // const {dispatch} = useContext<IReminderContext>(RemindersContext);
    const dispatch = useDispatch<Dispatch<ReminderActionTypes>>();

    const location = useLocation<{ date:Date }>();
    const history = useHistory();


    useEffect(()=>{
        setStartDate(location.state.date);
        setReminder({...reminder,color,date:location.state.date});
    }, [])

    const addReminderToState = (e:React.MouseEvent) =>{
        e.preventDefault();
        dispatch({
            type:"AddReminder",
            reminder:{...reminder,id:uuidv4()}
        });
        history.push('/');
    }

    return(
        <>
            <h1>New Reminder</h1>
            <form>
                
                <div className="form-group">
                    <label className="mr-3">Date</label>
                    <DatePicker 
                        selected={startDate} 
                        showTimeSelect dateFormat="Pp" 
                        onChange={(e:Date)=>{setStartDate(e);
                        setReminder({...reminder,date:e})}} />
                </div>
                <div className="form-group">
                    <label>Reminder</label>
                    <input 
                        maxLength={30} 
                        className="form-control" 
                        placeholder={"Insert remainder"} 
                        onChange={(e)=>setReminder({...reminder,description:e.target.value})}/>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input 
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
                    onClick={(e)=>addReminderToState(e)}>
                        Submit
                </button>
            </form>
        </>
    )
}

export default AddActivityForm
