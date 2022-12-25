'use client';

import { NavbarCopy } from '../../components';
import { Navbar, Background } from '../../components';

const register_team = () => (
    <div>
        <Navbar />
        <div className='aboutpage' >
            <div class="container  flex justify-center items-center h-screen mx-auto mt-4" className='aboutcard' style={{ display: 'flex', flexDirection: 'row' }}>
                <form action="#" class="formcard ">
                    <div class="p-3">
                        <input class="outline-none py-2 pr-4 block w-full text-white " type="text" placeholder="Team Name" required />
                    </div>
                    <div class="p-3">
                        <input class="outline-none py-2 pr-4 block w-full text-white " type="text" placeholder="Institue Name " required />
                    </div>
                    <div class="p-3">
                        <input type="text" placeholder="Team Leader Name" class="outline-none py-2 pr-4 block w-full text-white " required />
                    </div>
                    <div class="p-3" style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ marginRight: '10px' }}>
                            <input class="outline-none  block w-full  " type="email" placeholder="Email Id" required />
                        </div>
                        <div>
                            <input class="outline-none block w-full text-white " type="number" placeholder="Conatct No" required />
                        </div>
                    </div>
                    <div class="p-3">
                        <input type="text" placeholder="Team Member 2" class="outline-none py-2 pr-4 block w-full text-white " required />
                    </div>
                    <div class="p-3" style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ marginRight: '10px' }}>
                            <input class="outline-none  block w-full  " type="email" placeholder="Email Id" required />
                        </div>
                        <div>
                            <input class="outline-none block w-full text-white " type="number" placeholder="Conatct No" required />
                        </div>
                    </div>
                    <div class="p-3 pt-4 ml-24">

                    </div>
                </form>
                <form action="#" class="formcard ">
                    <div class="p-3">
                        <input class="outline-none py-2 pr-4 block w-full text-white " type="text" placeholder="Enter Name" required />
                    </div>
                    <div class="p-3">
                        <input class="outline-none py-2 pr-4 block w-full text-white " type="email" placeholder="Email Id" required />
                    </div>
                    <div class="p-3">
                        <input type="password" placeholder="Institue Name" class="outline-none py-2 pr-4 block w-full text-white " required />
                    </div>
                    <div class="p-3">
                    </div>
                    <div class="p-3">
                        <input class="outline-none py-2 pr-4 block w-full text-white " type="number" placeholder="Enter Mobile Number" required />
                    </div>
                    <div class="p-3 pt-4 ml-24">

                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default register_team;
