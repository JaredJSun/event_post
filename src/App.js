import React, { useState, useEffect } from 'react';
import './App.css';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import axios from 'axios';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('http://localhost:3001/api/events');
      setEvents(response.data);
    };
    fetchEvents();
  }, []);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="App">
      <h1>Event App</h1>
      <EventForm onEventCreated={addEvent} />
      <EventList events={events} />
    </div>
  );
}

export default App;

// import React from 'react';
// import EventForm from './components/EventForm';
// import EventList from './components/EventList';

// const [events, setEvents] = useState([]);

// const addEvent = (event) => {
//   setEvents((prevEvents) => [event, ...prevEvents]);
// };

// function App() {
//   return (
//     <div className="App">
//       <EventForm onEventCreated={addEvent} />
//       <EventList events={events} />
//     </div>
//   );
// }

// export default App;