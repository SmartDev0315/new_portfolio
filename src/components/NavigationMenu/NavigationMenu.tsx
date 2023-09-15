import { NavLink } from 'react-router-dom'
import './NavigationMenu.scss'

export default function Test() {
  const navItems = [
    {
      title: 'About me',
      to: '/',
    },
    {
      title: 'Expertise',
      to: '/expertise',
    },
    {
      title: 'Resume',
      to: '/resume',
    },
    {
      title: 'Projects',
      to: '/projects',
    },
    {
      title: 'Work Experience',
      to: '/work-experience',
    },
    {
      title: 'Contact me',
      to: '/contact',
    },
  ]

  return (
    <div>
      <ul className="NavigationMenu">
        <li className="profile">
          <img className="avatar" src="profile-square@500px.jpg" alt="avatar" />
          <p className='myname'>Norma Morris</p>
          <p className='myrole'>Full Stack Developer</p>
        </li>
        <li className="filler"></li>
        {navItems.map((e) => (
          <li key={e.title}>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to={e.to}
            >
              <h2>{e.title}</h2>
            </NavLink>
          </li>
        ))}
        <li className="filler"></li>
      </ul>
    </div>
  )
}
