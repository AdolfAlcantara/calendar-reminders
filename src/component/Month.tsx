import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import Day from './Day';
import moment from 'moment';
import {RemindersState} from '../interfaces/remainderInterfaces';
// import remainderReducer from '../reducer/reminderReducer';
// import {RemindersContext,IReminderContext} from '../context/reminderContext';


const Month = () =>{
    const [weeks, setWeeks] = useState<Date[][]>(new Array(5)
                                                    .fill([])
                                                    .map(()=>new Array(7)
                                                                .fill({date:0})));
    // const {reminders} = useContext<IReminderContext>(RemindersContext);
    const reminderSelector = (state:RemindersState) =>state.reminders;
    const reminders = useSelector(reminderSelector);
    
    
    const weeksCount = 5;
    const daysInWeek = 7;

    useEffect(()=>{
        let actualDate = moment().startOf('month');
        while(!(actualDate.format('dddd') === 'Sunday')){
            actualDate = actualDate.subtract(1,'days');
        }
        for(let x=0;x<weeksCount;x++){
            for(let y=0;y<daysInWeek;y++){
                let copy = [...weeks];
                copy[x][y] = actualDate.toDate()
                setWeeks(copy);
                actualDate = actualDate.add(1,'days');
            }
        }
    },[])
    
    return(
        
        <div className="d-flex flex-column align-self-stretch">
            <div className="row" style={{alignItems:'center'}}>
                <div className="column col" style={{textAlign:'center',backgroundColor:'gray',color:"white"}}>
                    <h3>Sunday</h3>
                </div>
                <div className="column col" style={{textAlign:'center',backgroundColor:'gray',color:"white"}}>
                    <h3>Monday</h3>
                </div>
                <div className="column col" style={{textAlign:'center',backgroundColor:'gray',color:"white"}}>
                    <h3>Tuesday</h3>
                </div>
                <div className="column col" style={{textAlign:'center',backgroundColor:'gray',color:"white"}}>
                    <h3>Wendnesday</h3>
                </div>
                <div className="column col" style={{textAlign:'center',backgroundColor:'gray',color:"white"}}>
                    <h3>Thursday</h3>
                </div>
                <div className="column col" style={{textAlign:'center',backgroundColor:'gray',color:"white"}}>
                    <h3>Friday</h3>
                </div>
                <div className="column col" style={{textAlign:'center',backgroundColor:'gray',color:"white"}}>
                    <h3>Saturday</h3>
                </div>
            </div>
            { 
                weeks.map((x)=>(
                    <>
                        <div className="row">
                            { x.map((y)=>(
                                <div className="column col" style={{paddingRight:"0", paddingLeft:"0"}}>
                                    <Day date={y} 
                                         reminders={reminders.filter((e)=>{
                                            const reminderDate = moment(e.date);
                                            const dayDate = moment(y);
                                            return reminderDate.isSame(dayDate,"day");
                                        }).sort((x,y)=> moment(x.date).hour() - moment(y.date).hour())}
                                    />
                                </div>
                                )
                            )}
                        </div>
                        <div className="w-100"></div>
                    </>
                    )
                )
            }
        </div>
    )
}

export default Month;