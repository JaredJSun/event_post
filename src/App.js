import React from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';

function App() {
  return (
    <div className="App">
      <h1>Create Event</h1>
      <EventForm />
      <h2>Event List</h2>
      <EventList />
    </div>
  );
}

export default App;