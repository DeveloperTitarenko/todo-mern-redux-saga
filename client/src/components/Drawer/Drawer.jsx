import './drawer.scss'
import {useState} from "react";

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import dashboardIcon from '../../static/drawer/nav/Dashboard'


import logo from '../../static/logo/Group.svg'
import {NavLink} from "react-router-dom";
import SettingSvg from "../../static/drawer/nav/setting";
import DocumentsSvg from "../../static/drawer/nav/documents";
import CoursesSvg from "../../static/drawer/nav/Courses";
import DashboardSvg from "../../static/drawer/nav/Dashboard";
const Drawer = () => {
  const [active, setActive] = useState(true)
  const showDrawer = () => setActive((prev) => !prev)
  return(
    <div className={`drawer ${active ? 'active': null}`}>
      {active ? <ChevronLeftIcon className='arrow' fontSize='large' onClick={showDrawer}/>
        : <MenuIcon className='menu' fontSize='large' onClick={showDrawer}/>}
      <div className='drawer__logo'>
        <img src={logo} alt="" className="drawer__logo-img"/>
        <h2 className='drawer__logo-title'>Tasks</h2>
      </div>
      <nav className="drawer__nav">
        <ul>
          <li><NavLink to='/Dashboard' className='link' activeClassName='active-link'><DashboardSvg/><span>Dashboard</span></NavLink></li>
          <li><NavLink to="/Courses" className='link' activeClassName='active-link'><CoursesSvg/><span>In gear</span></NavLink></li>
          <li><NavLink to="/Materials" className='link' activeClassName='active-link'><DocumentsSvg /><span>Archive</span></NavLink></li>
          <li><NavLink to="/Settings" className='link' activeClassName='active-link'><SettingSvg /><span>Settings</span></NavLink></li>
        </ul>
      </nav>

    </div>
  )
}
export default Drawer