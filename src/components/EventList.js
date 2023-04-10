import React, { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import './styles/EventList.css'; // 导入CSS文件

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('http://localhost:3001/api/events');
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