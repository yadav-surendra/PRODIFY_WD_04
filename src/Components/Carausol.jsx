// src/App.js
import React from 'react';
import './project.css';
import CarousolCard from './CarausolCard';

const projects = [
  { title: 'HangMan Game', description: 'developed this game with C++ using the class for storing the keywords' , cardImg: require('./hang.png') },
  { title: 'Expense Tracker App', description: 'A simple solution to tratck your expenses and your fiance partner.' , cardImg:require('./expense-tracker.png')},
  { title: 'Currency Exchange App', description: 'Simple and handy tool to check the exchange rate any time', cardImg:require('./money.jpg') },
  { title: 'Student Database', description: 'Solution for the student record management in schools and colleges', cardImg:require('./recordmgmt.png') },
  { title: 'Weather App', description: 'Easy platform to check about the weather conditions of your city/town anytime anywhere.' , cardImg: require('./weather.png') },
  { title: 'Amazon Clone', description: 'Clone of the Amazom website as part of learning frontend development.' , cardImg:require('./amazon.png')},
  { title: 'TicTacToe', description: 'Fun project to implement the learning of the concepts of JS', cardImg:require('./tictac.png') },
  
];

function Carausol() {
  return (
    <div className="Carousel-app">
      <h2>My Projects</h2>
      <CarousolCard projects={projects} />
    </div>
  );
}

export default Carausol;

