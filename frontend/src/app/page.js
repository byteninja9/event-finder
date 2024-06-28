// pages/index.js
"use client";
import { useState } from "react";
import axios from "axios";
import SearchInput from "@/app/components/SearchInput";
import EventList from "@/app/components/EventList";

export default function Home() {
  const [events, setEvents] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/search?query=${query}`,
      );
      const eventsData = response.data.map((event) => ({
        title: event.title,
        description: event.description,
        date: event.date,
        address: event.address,
        image: event.image,
        link: event.link,
        venue: event.venue,
        sources: event.sources,
        event_location_map: event.event_location_map,
      }));
      setEvents(eventsData);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-bold my-4">Event Monitoring</h1>
      <SearchInput onSearch={handleSearch} />
      {events.length > 0 && <EventList events={events} />}
    </div>
  );
}
