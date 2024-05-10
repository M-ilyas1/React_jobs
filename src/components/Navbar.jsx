import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png'

function Navbar() {
  
  const activeNav = (
    ({ isActive })=> isActive ? 'px-3 py-2 active:bg-black bg-black text-white rounded-lg' : 'px-3 py-2 hover:bg-black text-white rounded-lg' 
  )

  return (
    <>
      <div className="flex justify-center bg-indigo-600 border-b border-white items-center w-full">
        <div className="w-[90%] flex justify-between items-center flex-wrap p-3">
          <div className="flex items-center gap-2">
          <img src={Logo} alt="" className='w-10 rounded-full' />
            <h1 className="text-white text-[20px] font-bold">React Job</h1>
          </div>
          <div className="flex gap-4">
            <NavLink to="/" className={activeNav}>
              Home
            </NavLink>
            <NavLink to="/jobs" className={activeNav}>
              Jobs
            </NavLink>
            <NavLink to="/add_jobs" className={activeNav}>
              Add Jobs
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
