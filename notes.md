## Currently working on:

- form dispatches an action, but doesn't update redux state
- state is only updated at page refresh ??

## Project Requirements:

- The code should be written in ES6 as much as possible
- Use the create-react-app generator to start your project.
- Follow the instructions on this repo to setup the generator: create-react-app
- Your app should have one HTML page to render your react-redux application

* There should be 2 container components - DONE

  - WorkoutsContainer
  - PlansContainer

* There should be 5 stateless components

  - WorkoutsList
  - About
  - Home
  - NavBar

* There should be 3 routes - DONE
  - Home
  - About
  - Workouts
  - Plans

- The Application must make use of react-router and proper RESTful routing
- Use Redux middleware to respond to and modify state change
- Make use of async actions and redux-thunk middleware to send data to and receive data from - a server
- Your Rails API should handle the data persistence with a database. You should be using - fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
- Your client-side application should handle the display of data with minimal data - manipulation
- minimal styling: feel free to stick to a framework (like - react-bootstrap), but if you want to write (additional) CSS yourself, go for it!

## Models

WorkOut :date :duration :workout_type

Plan :goal :cut_off
