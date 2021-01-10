// import React from 'react';
import AddActivityForm from "../component/AddActivityForm";
import EditActivityForm from "../component/EditActivityForm";
// import remainderReducer from '../reducer/reminderReducer';
import Month from '../component/Month';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import {RemindersContext} from '../context/reminderContext';

const AppRouter = () => {

  // const [reminders,dispatch] = useReducer(remainderReducer,{reminders:[]})

  return (
    // <RemindersContext.Provider value={{reminders:reminders.reminders,dispatch}}>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Month}/>
            <Route path="/addActivity" component={AddActivityForm}/>
            <Route path="/editActivity/:id" component={EditActivityForm}/>
        </Switch>
      </BrowserRouter>
    // </RemindersContext.Provider>
  );
}

export default AppRouter;
