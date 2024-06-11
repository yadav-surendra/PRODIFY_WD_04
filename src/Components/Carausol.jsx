// src/App.js
import React from 'react';
import Carousol_card from './Carausol_card';

const projects = [
  { title: 'HangMan Game', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, incidunt repudiandae. Non excepturi est totam nisi quas neque beatae quaerat ad. Maxime aspernatur deserunt consequuntur praesentium perspiciatis commodi,' , cardImg: require('./hang.png') },
  { title: 'Expense Tracker App', description: 'Description for Project 2' , cardImg:require('./expense-tracker.png')},
  { title: 'Currency Exchange App', description: 'Description for Project 3', cardImg:require('./money.jpg') },
  { title: 'Student Database', description: 'Description for Project 3', cardImg:require('./recordmgmt.png') },
  { title: 'Weather App', description: 'Description for Project 1' , cardImg: require('./weather.png') },
  { title: 'Amazon Clone', description: 'Description for Project 2' , cardImg:require('./amazon.png')},
  { title: 'TicTacToe', description: 'Description for Project 3', cardImg:require('./tictac.png') },
  
];

function Carausol() {
  return (
    <div className="Carousel-app">
      <h2>My Projects</h2>
      <Carousol_card projects={projects} />
    </div>
  );
}

export default Carausol;

