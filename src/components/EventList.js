import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('http://localhost:5000/api/events');
      setEvents(response.data);
    };
    fetchEvents();
  }, []);

  return (
    <ul>
      {events.map((event) => (
        <li key={event._id}>
          <h3>{event.name}</h3>
          <p>Location: {event.location}</p>
          <p>Description: {event.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default EventList;