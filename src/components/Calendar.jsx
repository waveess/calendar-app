import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        themeSystem="custom"
        headerToolbar={{
          start: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "today prev,next", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
      />
    </div>
  );
}

export default Calendar;