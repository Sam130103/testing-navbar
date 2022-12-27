'use client';

import Link from 'next/link';

// import Image from 'next/image';

const Card = ({ id, name, desc, imgsrc, url }) => (
  <div>
    {/* <div className="flex flex-wrap -m-3"> */}
    <div className="">
      {/* <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3"> */}
      <div className="">
        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
          <div
            className=" bg-cover h-96 sm:h-56  "
            style={{ backgroundImage: `url('${imgsrc}')` }}
          />
          {/* <Image src="/home.jpg" alt={name} width={100} height={100} /> */}
          <div
            className="p-4 flex-1 flex flex-col"
          >
            <h3 className="mb-3 text-2xl font-bold">{name}</h3>
            <div className="mb-4 text-black text-sm flex-1">
              <p>{desc.length > 100 ? `${desc.substring(0, 100)}...` : desc}</p>
            </div>
            {/* <a
              href={url}
              className="border-t hovertext text-black hover:font-bold hover:text-teal-400 border-grey-light pt-2 text-xs text-grey  uppercase no-underline tracking-wide"
            >
              Register
            </a> */}
            <div className="divbutton38">
              {/* <button href={url} className="btnevent">Register <img src="https://www.htmlcssbuttongenerator.com/iconExample-text-align-left-lined.svg" style={{width:'21px', marginLeft:'6px' , marginRight:'3px', flexDirection: 'row' }} /></button> */}
              {/* <button href={url}  className="border-t hover:font-bold bg-sky-300 border-grey-light  uppercase text-xs no-underline tracking-wide pt-2">register</button> */}
              <Link href={url} className="border-t button-38 border-grey-light hover:text-black uppercase text-xs no-underline tracking-wide pt-2">register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Card;
