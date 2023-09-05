import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


function MyCalendar() {
  const [events, setEvents] = useState([]);

  const handleEventDrop = (eventInfo) => {
    // Handle event drop here, update the event's start and end times, and save changes.
    // Example: Update events state with the new event info.
    const updatedEvents = events.map((event) =>
      event.id === eventInfo.event.id ? { ...event, start: eventInfo.event.start, end: eventInfo.event.end } : event
    );
    setEvents(updatedEvents);
  };

  const handleEventResize = (eventInfo) => {
    // Handle event resize here, update the event's end time, and save changes.
    // Example: Update events state with the new event info.
    const updatedEvents = events.map((event) =>
      event.id === eventInfo.event.id ? { ...event, end: eventInfo.event.end } : event
    );
    setEvents(updatedEvents);
  };

  const handleAddEventClick = () => {
    // Open a form/modal to gather event details from the user.
    const newEvent = {
      id: new Date().toISOString(), // Generate a unique ID for the event
      title: 'New Event', // Set your default title or ask the user for it
      start: '2023-09-15T10:00:00', // Set your default start time or ask the user for it
      end: '2023-09-15T12:00:00', // Set your default end time or ask the user for it
    };

    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        editable={true}
        eventDrop={handleEventDrop}
        eventResize={handleEventResize}
        // More FullCalendar props...
      />
      <button onClick={handleAddEventClick}>Add Event</button>
    </div>
  );
}

export default MyCalendar;