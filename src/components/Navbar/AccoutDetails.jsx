import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AvatarBtn from './AvatarBtn'
import { AccountDetailsContainer, Button } from './NavbarStyles'
import CloseIcon from '@mui/icons-material/Close'
import accountDetailsObj from '../../assets/AccountDetails/accountDetails'
import allLinks from '../../assets/sidebar/Links'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../redux/Actions/authActions'
const AccoutDetails = ({ active }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { error, isLoggedIn, user } = useSelector((state) => state.user)

  useEffect(() => {
    if (location.pathname === '/logout') {
      dispatch(logoutUser())
      navigate('/')
    }
  }, [navigate, error, isLoggedIn, dispatch, user])

  return (
    <AccountDetailsContainer active={active}>
      <div className="profile">
        <AvatarBtn img={user.img} />
        <div className="info">
          <p>{user.name}</p>
          <Link to="/">
            <p>Manage Your account</p>
          </Link>
        </div>
        <Button className="close_btn">
          <CloseIcon />
        </Button>
      </div>

      <div className="content">
        <div className="list">
          {accountDetailsObj.first.map((item) => (
            <Link key={item.title} to={item.link}>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.title}</span>
            </Link>
          ))}
        </div>
        <div className="list">
          {accountDetailsObj.second.map((item) => (
            <Link key={item.title} to={item.link}>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.title}</span>
            </Link>
          ))}
        </div>
        <div className="list">
          {accountDetailsObj.third.map((item) => (
            <Link key={item.title} to={item.link}>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.title}</span>
            </Link>
          ))}
        </div>
        <div className="list">
          {allLinks.last.map((item) => (
            <Link key={item.title} to={item.link}>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </AccountDetailsContainer>
  )
}

export default AccoutDetails
