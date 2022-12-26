import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { eventsList } from '../../../utils/eventsData.js';

const EventPage = () => {
  const [eventName, seteventName] = useState('EventName');
  const [eventDesc, seteventDesc] = useState('EventDescription');
  const router = useRouter();
  const { eventID } = router.query;

  useEffect(() => {
    eventsList.forEach((event) => {
      if (event.id === eventID) {
        // <h1>hello, {event}</h1>;
        seteventName(event.id);
        seteventDesc(event.description);
      } else {
        <h1>Error 404</h1>;
      }
    }, []);
  });

  return (
    <div>
      <h1>EventName: {eventName}</h1>
      <h1>EventDescription: {eventDesc}</h1>
    </div>
  );
};

export default EventPage;
