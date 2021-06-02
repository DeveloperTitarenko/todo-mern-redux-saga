import './drawer.scss'
import {useState} from "react";

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import coursesIcon from '../../static/drawer/nav/Group.svg'
import dashboardIcon from '../../static/drawer/nav/Group 1077.svg'
import documentIcon from '../../static/drawer/nav/ion_documents-outline.svg'
import settingIcon from '../../static/drawer/nav/setting 1 copy.svg'

import logo from '../../static/logo/Group.svg'
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
          <li><img src={dashboardIcon} alt=""/><span>Dashboard</span></li>
          <li><img src={coursesIcon} alt=""/><span>Courses</span></li>
          <li><img src={documentIcon} alt=""/><span>Materials</span></li>
          <li><img src={settingIcon} alt=""/><span>Settings</span></li>
        </ul>
      </nav>

    </div>
  )
}
export default Drawer