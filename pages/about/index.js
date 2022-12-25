'use client';

import { NavbarCopy } from '../../components';
import {Navbar, Background} from '../../components';

const about = () => (
  <div>
  <Navbar />
  <div className='aboutpage'>

    <div class="container  flex justify-center items-center h-screen mx-auto mt-4" className='aboutcard'>
      <form action="#" class="formcard ">
        <div class="p-3">
          <input class="outline-none py-2 pr-4 block w-full text-white " type="text" placeholder="Enter Name" required/>
        </div>
        <div class="p-3">
          <input class="outline-none py-2 pr-4 block w-full text-white " type="email" placeholder="Email Id" required/>
        </div>
        <div class="p-3">
          <input type="password" placeholder="Institue Name" class="outline-none py-2 pr-4 block w-full text-white " required/>
        </div>
        <div class="p-3">
          
          <div class="outline-none py-2 pr-4 block w-full" >
          <label style={{color:'white'}}>Select Course:</label>
          <select style={{width:'150px',marginLeft:'30px',height:'30px',borderRadius:'7px',backgroundColor:'rgba(255,255,255,0.3)'}}>
          <option selected disabled hidden>Select</option>
          <option >Bachelors</option>
          <option >Masters</option>
          <option >Other</option>
          </select>
          </div>
        </div>
        <div class="p-3">
          <input class="outline-none py-2 pr-4 block w-full text-white " type="number" placeholder="Enter Mobile Number" required/>
        </div>
        <div class="p-3 pt-4 ml-24">
          <button className="inline-block   px-7 py-3  text-white font-bold  leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!">
          Register
          </button>
          </div>
      </form>
      </div>

    </div>
    </div>
    );

    export default about;
