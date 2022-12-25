'use client';

const Glscard = ({ imgSrc, nam, des, ur }) => (
  <div>
    {/* <Col size={12} sm={6} md={4}> */}
    <div className="proj-imgbx h-96 w-96 md:h-56 md:w-56 sm:h-60 sm:w-60 fill">
      <img src={imgSrc} />
      <div className="proj-txtx">
        <h4>{nam}</h4>
        <span>{des}</span>
        <p />
        <button href={ur} className="border-t button-38 border-grey-light  uppercase text-xs no-underline tracking-wide mt-2 pt-2">More Info.</button>
      </div>
    </div>
    {/* </Col> */}
  </div>
);
export default Glscard;
