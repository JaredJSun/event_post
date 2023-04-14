import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/EventList.css'; // 导入CSS文件

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('http://localhost:3001/api/events');
      setEvents(response.data);
    };
    fetchEvents();
  }, []);

  const showMap = (location) => {
    const query = encodeURIComponent(location);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Event List</h2>
      <div className="event-list">
        {events.map((event) => (
          <div className="event-item" key={event._id}>
            <h3>{event.name}</h3>
            <p>
              Location: {event.location}{' '}
              <button onClick={() => showMap(event.location)}>
                Show Map
              </button>
            </p>
            <p>Description: {event.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/EventList.css'; // 导入CSS文件
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import Geocode from 'react-geocode';

// Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

// const EventList = () => {
//   const [events, setEvents] = useState([]);
//   const [mapLocation, setMapLocation] = useState(null);
//   const [showMap, setShowMap] = useState(false);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const response = await axios.get('http://localhost:3001/api/events');
//       setEvents(response.data);
//     };
//     fetchEvents();
//   }, []);

//   const handleShowMap = async (location) => {
//     const response = await Geocode.fromAddress(location);
//     const { lat, lng } = response.results[0].geometry.location;
//     setMapLocation({ lat, lng });
//     setShowMap(true);
//   };

//   const handleCloseMap = () => {
//     setShowMap(false);
//   };

//   return (
//     <>
//       <h2 style={{ textAlign: 'center' }}>Event List</h2>
//       <div className="event-list">
//         {events.map((event) => (
//           <div className="event-item" key={event._id}>
//             <h3>{event.name}</h3>
//             <p>
//               Location: {event.location}{' '}
//               <button onClick={() => handleShowMap(event.location)}>
//                 Show Map
//               </button>
//             </p>
//             <p>Description: {event.description}</p>
//           </div>
//         ))}
//       </div>
//       {showMap && mapLocation && (
//         <div>
//           <button onClick={handleCloseMap}>Close Map</button>
//           <MapContainer
//             center={mapLocation}
//             zoom={13}
//             style={{ height: '400px', width: '100%' }}
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             />
//             <Marker position={mapLocation}>
//               <Popup>Event Location</Popup>
//             </Marker>
//           </MapContainer>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/EventList.css'; // 导入CSS文件

// const EventList = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const response = await axios.get('http://localhost:3001/api/events');
//       setEvents(response.data);
//     };
//     fetchEvents();
//   }, []);

//   return (
//     <>
//       <h2 style={{ textAlign: 'center' }}>Event List</h2>
//       <div className="event-list">
//         {events.map((event) => (
//           <div className="event-item" key={event._id}>
//             <h3>{event.name}</h3>
//             <p>Location: {event.location}</p>
//             <p>Description: {event.description}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default EventList;