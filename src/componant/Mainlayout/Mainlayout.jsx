
import { Outlet } from 'react-router-dom';
import Nav from '../Navbar/Nav';


const Mainlayout = () => {
    return (
        <div className=' max-w-screen-xl m-auto '>
            
            <div className='text-2xl font-bold '>
            <Nav></Nav>
            </div>
          <div className='mt-8'>
          <Outlet></Outlet>
          </div>
        </div>
        
    );
};

export default Mainlayout;