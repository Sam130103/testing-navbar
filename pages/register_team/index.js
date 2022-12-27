'use client';

import { NavbarCopy } from '../../components';
import { Navbar, Background } from '../../components';

const register_team = () => (
    <div>
        <Navbar/>
        <div className='aboutpage mt-12 mb-7'  >
            <div class="container  flex justify-center items-center h-screen mx-auto " className='aboutcard' >
                <div action="#" class="formcard " >
                    <div class="p-3">
                        <input class="outline-none py-2 pr-4 block w-full text-white " type="text" placeholder="Team Name" required />
                    </div>
                    <div class="p-3">
                        <input class="outline-none py-2 pr-4 block w-full text-white " type="text" placeholder="Team Leader" required />
                    </div>
                    <div class="p-3">
                        <input type="text" placeholder="Institute" class="outline-none py-2 pr-4 block w-full text-white " required />
                    </div>
                    <div class="p-3" style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ marginRight: '10px' }}>
                            <input class="outline-none  block w-full   text-white" type="email" placeholder="Email Id" required />
                        </div>
                        <div>
                            <input class="outline-none block w-full text-white " type="number" placeholder="Conatct No" required />
                        </div>
                    </div>
                    <div class="p-3">
                        <input class="outline-none py-2 pr-4 block w-full text-white " type="text" placeholder="Member 1" required />
                    </div>
                    <div class="p-3">
                        <input type="text" placeholder="Institute" class="outline-none py-2 pr-4 block w-full text-white " required />
                    </div>
                    <div class="p-3" style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ marginRight: '10px' }}>
                            <input class="outline-none  block w-full  text-white " type="email" placeholder="Email Id" required />
                        </div>
                        <div>
                            <input class="outline-none block w-full text-white " type="number" placeholder="Conatct No" required />
                        </div>
                    </div>
                </div>
                <div >
                    <div class="p-3">
                        <input class="outline-none py-2 pr-4 block w-full text-white " type="text" placeholder="Member 2" required />
                    </div>
                    <div class="p-3">
                        <input type="text" placeholder="Institute" class="outline-none py-2 pr-4 block w-full text-white " required />
                    </div>
                    <div class="p-3" style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ marginRight: '10px' }}>
                            <input class="outline-none  block w-full   text-white" type="email" placeholder="Email Id" required />
                        </div>
                        <div>
                            <input class="outline-none block w-full text-white " type="number" placeholder="Conatct No" required />
                        </div>
                    </div>
                    <div class="p-3">
                        <input class="outline-none py-2 pr-4 block w-full text-white " type="text" placeholder="Member 3" required />
                    </div>
                    <div class="p-3">
                        <input type="text" placeholder="Institute" class="outline-none py-2 pr-4 block w-full text-white " required />
                    </div>
                    <div class="p-3" style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ marginRight: '10px' }}>
                            <input class="outline-none  block w-full   text-white" type="email" placeholder="Email Id" required />
                        </div>
                        <div>
                            <input class="outline-none block w-full text-white " type="number" placeholder="Conatct No" required />
                        </div>
                    </div>
                    <div class="p-2">
                        <button className="inline-block   px-7 py-3  text-white font-bold  leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default register_team;
