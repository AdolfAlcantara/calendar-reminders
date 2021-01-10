import {Reminder} from '../interfaces/remainderInterfaces';
import {Link} from 'react-router-dom';
import moment from 'moment';

interface DayProps {
    date: Date;
    reminders:Reminder[];
}

const Day: React.FC<DayProps> = ({ date,reminders }) =>{
    

    return(
        <div className="card card-body h-100">
            <div className="card-body h-100">
                <Link to={{pathname:"/addActivity",
                        state:{
                            date
                        }}} >
                    <h5 className="card-title">{moment(date).format('DD[/]MM')}</h5>
                </Link>
                {
                    reminders.map((reminder)=>(
                        <div className="col">
                            <p style={{color:reminder.color}}>{reminder.description} at {moment(reminder.date).format('h:mm a')}</p>
                        </div>)
                    )             
                }
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    );
}

export default Day;