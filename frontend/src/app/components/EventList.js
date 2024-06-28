// src/app/components/EventList.js
export default function EventList({ events }) {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">{event.title}</h2>
          <img className="w-full h-64 object-cover rounded-t-lg" src={event.image} alt={event.title} />
          <p className="mt-4">{event.description}</p>
          <p className="text-gray-600 mt-2">
            {event.date.start_date} - {event.date.when}
          </p>
          <p className="text-gray-600 mt-2">
            Reviews: {event.venue.reviews}
          </p>
          <p className="text-gray-600 mt-2">
            Rating: {event.venue.rating}
          </p>
          <p className="text-gray-600 mt-2">{event.address.join(", ")}</p>
          <a href={event.link}
          target="_blank"
          rel="noopener noreferre"
          className="text-green-400 hover:underline block mt-2"
          >
            Event Link
          </a>
          <a
            href={event.event_location_map.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline block mt-2"
          >
            View Location
          </a>
          {event.ticket_info && (
            <div className="ticket-info mt-2">
              {event.ticket_info.map((ticket, ticketIndex) => (
                <a
                  key={ticketIndex}
                  href={ticket.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline block"
                >
                  {ticket.source} ({ticket.link_type})
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}