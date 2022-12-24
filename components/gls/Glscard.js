'use client';

const Glscard = ({ imgSrc, nam }) => (
  <div>
    <div className="card-grid-space">
      <a className="card" style={{ backgroundImage: `url('${imgSrc}')` }}>
        {/* {console.log(nam)} */}
        {/* <h1>hello akshay</h1> */}
        <div style={{marginTop:'200px'}} className="textdata">
          <h1 className="text-black">{nam}</h1>
          <p className="text-black">The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
          {/* <div class="date">6 Oct 2017</div> */}
          <div className="tags">
            <div className="tag text-black" >HTML</div>
          </div>
        </div>
      </a>
    </div>
  </div>
);
export default Glscard;
