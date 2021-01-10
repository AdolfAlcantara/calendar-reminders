import React,{useReducer} from 'react';
import AddActivityForm from "../component/AddActivityForm";
import remainderReducer from '../reducer/remainderReducer';
import Month from '../component/Month';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {RemindersContext} from '../context/reminderContext';

const AppRouter = () => {

  const [reminders,dispatch] = useReducer(remainderReducer,{reminders:[]})

  return (
    <RemindersContext.Provider value={{reminders:reminders.reminders,dispatch}}>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Month}/>
            <Route path="/addActivity" component={AddActivityForm}/>
        </Switch>
      </BrowserRouter>
    </RemindersContext.Provider>
  );
}

export default AppRouter;
