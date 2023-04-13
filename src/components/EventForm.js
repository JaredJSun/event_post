import React, { useState } from 'react';
import axios from 'axios';
import '../styles/EventForm.css'; // 导入CSS文件
import { getGeocode, getLatLng } from "use-places-autocomplete"; // import google maps api

const EventForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const event = { name, location, description };
  //   await axios.post('http://localhost:3001/api/events', event);
  //   setName('');
  //   setLocation('');
  //   setDescription('');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const results = await getGeocode({ address: location });
      const { lat, lng } = await getLatLng(results[0]);
      const event = { name, location, description, lat, lng };
      await axios.post('http://localhost:3001/api/events', event);
      setName('');
      setLocation('');
      setDescription('');
    } catch (error) {
      console.error("Error fetching geocode data:", error);
    }
  };  

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Create Event</h2>
      <form className="event-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create Event</button>
      </form>
    </>
  );
};

export default EventForm;