import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { eventsList } from '../../../utils/eventsData.js';

const EventPage = () => {
  const [eventIdActual, seteventidActual] = useState('Event ID');
  const [eventName, seteventName] = useState('EventName');
  const [eventDesc, seteventDesc] = useState('EventDescription');
  const router = useRouter();
  const eventIdRouter = router.query.eventID;
  // console.log(eventIdRouter);

  useEffect(() => {
    eventsList.forEach((event) => {
      if (event.id === eventIdRouter) {
        // <h1>hello, {event}</h1>;
        // alert('hello');
        seteventidActual(event.id);
        seteventName(event.id); // id and name refers same here for some reason
        seteventDesc(event.description);
      }
    }, []);
  });

  return (
    <div>
      {eventIdActual === eventIdRouter ? (
        <div>
          <h1>EventName: {eventName}</h1>
          <h1>EventDescription: {eventDesc}</h1>
        </div>

      ) : (
        <h1>error/Notfound page render here!!</h1>
      )}

    </div>
  );
};

export default EventPage;

export async function generateStaticParams() {
  return eventsList.map((event) => ({
    eventID: event.id,
  }));
}
