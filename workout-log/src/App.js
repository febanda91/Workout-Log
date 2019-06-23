import React, { Component } from 'react';

import Workouts from './Workouts'




class App extends Component {

  state = {
    workouts: [
      {id:1, title:'leg day'},
      {id:2, title:'chest day'},
      {id:3, title:'back day'}

    ]
   }

   addWorkout = (workout) => {

   }


   deleteWorkout = (id) => {


   }







  render() {
    return (
      <div className="workout-container">
        <h1 className="center-blue-text">Workout Log!!!</h1>


      </div>
    );
  }
}

export default App;
