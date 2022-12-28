import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { eventsList } from '../../../utils/eventsData.js';
import Finevent from '../../../components/events/Finevent';
import Navbar from '../../../components/Navbar.jsx';
import Error404 from '../../404';

const EventPage = () => {
  const [eventIdActual, seteventidActual] = useState('Event ID');
  const [eventName, seteventName] = useState('EventName');
  const [eventDesc, seteventDesc] = useState('EventDescription');
  const [eventImg, seteventImg] = useState('/home.jpg');
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
        seteventImg(event.imageSrc);
      }
    }, []);
  });

  return (
    <div>
      {eventIdActual === eventIdRouter ? (
        <div>
          <Navbar />
          <Finevent
            evName={eventName}
            evDesc={eventDesc}
            evImg={eventImg}
          />
        </div>

      ) : (
        <Error404 />
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
