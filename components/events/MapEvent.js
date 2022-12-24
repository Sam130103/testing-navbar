import React, { useEffect } from 'react';
import { eventsList } from '../../utils/eventsData.js';
import Cardcopy from './EventCard';

function eventsCard() {
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.body.style.maxWidth = '900px';
    document.body.style.margin = '30px auto';
    document.body.style.padding = '20px';
  }, []);
  return (
    <div className="p-7  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {/* // <div className="grid-cols-3"> */}
      {eventsList.map((e) => (
        <Cardcopy
          id={e.id}
          name={e.name}
          desc={e.description}
          imgsrc={e.imageSrc}
          url={e.url}
        />
      ))}
    </div>
  );
}

export default eventsCard;
