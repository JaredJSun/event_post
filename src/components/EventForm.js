import React, { useState } from 'react';
import axios from 'axios';
import '../styles/EventForm.css';

const EventForm = ({ onEventCreated }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/events', {
        name,
        location,
        description,
      });
      onEventCreated(response.data);
      setName('');
      setLocation('');
      setDescription('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Create Event</h2>
      <div className="form-item">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-item">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="form-item">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/EventForm.css';

// const EventForm = ({ onEventCreated }) => {
//   const [name, setName] = useState('');
//   const [location, setLocation] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newEvent = { name, location, description };
//     const response = await axios.post('http://localhost:3001/api/events', newEvent);
//     onEventCreated(response.data);
//     setName('');
//     setLocation('');
//     setDescription('');
//   };

//   return (
//     <form className="event-form" onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Location:
//         <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
//       </label>
//       <label>
//         Description:
//         <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//       </label>
//       <button type="submit">Create Event</button>
//     </form>
//   );
// };

// export default EventForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/EventForm.css'; // 导入CSS文件
// import { getGeocode, getLatLng } from "use-places-autocomplete"; // import google maps api

// const EventForm = () => {
//   const [name, setName] = useState('');
//   const [location, setLocation] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/api/events', {
//         name,
//         location,
//         description,
//       });
//       onEventCreated(response.data);
//       setName('');
//       setLocation('');
//       setDescription('');
//     } catch (err) {
//       console.error('Error creating event:', err);
//     }
//   };  

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const event = { name, location, description };
//   //   await axios.post('http://localhost:3001/api/events', event);
//   //   setName('');
//   //   setLocation('');
//   //   setDescription('');
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const results = await getGeocode({ address: location });
//   //     const { lat, lng } = await getLatLng(results[0]);
//   //     const event = { name, location, description, lat, lng };
//   //     await axios.post('http://localhost:3001/api/events', event);
//   //     setName('');
//   //     setLocation('');
//   //     setDescription('');
//   //   } catch (error) {
//   //     console.error("Error fetching geocode data:", error);
//   //   }
//   // };  

//   return (
//     <>
//       <h2 style={{ textAlign: 'center' }}>Create Event</h2>
//       <form className="event-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Event Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//         <textarea
//           name="description"
//           placeholder="Event Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <button type="submit">Create Event</button>
//       </form>
//     </>
//   );
// };

// export default EventForm;