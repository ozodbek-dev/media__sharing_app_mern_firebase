import { useState, useEffect, useRef } from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

import { Link } from 'react-router-dom'
import Search from './Search'
import { Brand, Container, Button, Left, Right, Middle } from './NavbarStyles'
import AvatarBtn from './AvatarBtn'
import { Sidebar } from '../Sidebar'
import AddVideo from './AddVideo'
import NotificationsList from './NotificationsList'
import AccoutDetails from './AccoutDetails'
import { clickOutsideRef } from '../../utils/clickOutsideRefocus'
import SignInBtn from '../Auth/SignIn/SignInBtn'
import { More, MoreVert } from '@mui/icons-material'
import { useSelector } from 'react-redux'

export default function Navbar({ setActiveSidebar, setActiveSidebarPanel }) {
  const [searchActive, setSearchActive] = useState(false)
  const [activeUploadLinks, setActiveUploadLinks] = useState(false)
  const [activeNotifications, setActiveNotifications] = useState(false)
  const [activeUserDetails, setActiveUserDetails] = useState(false)
  const { isLoggedIn, user } = useSelector((state) => state.user);

  const whileClickMenuBtn = () => {
    setActiveSidebarPanel((prev) => !prev)
    setActiveSidebar((prev) => !prev)
  }

  const whileMenuRefocus = (active) => {
    setActiveSidebarPanel(!active)
    setActiveSidebar(active)
  }

  const videoRef = useRef(null)
  const videoToggleRef = useRef(null)

  const menu_ref = useRef(null)
  const menu_toggle_ref = useRef(null)

  const notification_ref = useRef(null)
  const notification_toggle_ref = useRef(null)

  const profile_ref = useRef(null)
  const profile_toggle_ref = useRef(null)

  useEffect(() => {
    clickOutsideRef(videoRef, videoToggleRef, setActiveUploadLinks)

    clickOutsideRef(menu_ref, menu_toggle_ref, whileMenuRefocus)

    clickOutsideRef(
      notification_ref,
      notification_toggle_ref,
      setActiveNotifications,
    )

    clickOutsideRef(profile_ref, profile_toggle_ref, setActiveUserDetails)
  }, [])

  return (
    <Container>
      <Right>
        <Button ref={menu_toggle_ref} onClick={whileClickMenuBtn}>
          <MenuIcon ref={menu_ref} />
        </Button>
        <Link to="/">
          <Brand>
            <YouTubeIcon />
            <span>YouTube</span>
          </Brand>
        </Link>
      </Right>
      <Middle>
        <Search active={searchActive} setSearchActive={setSearchActive} />
        <Button
          className="mobile_search_btn"
          onClick={() => setSearchActive((prev) => !prev)}
        >
          <SearchOutlinedIcon />
        </Button>
        <Button>
          <KeyboardVoiceIcon />
        </Button>
      </Middle>
      {isLoggedIn ? (
        <Left>
          <Button
            style={{ position: 'relative' }}
            onClick={() => setActiveUploadLinks((prev) => !prev)}
            ref={videoToggleRef}
          >
            <VideoCallOutlinedIcon />
            <div ref={videoRef}>
              {' '}
              <AddVideo active={activeUploadLinks} />
            </div>
          </Button>
          <Button
            className="notification"
            style={{ position: 'relative' }}
            onClick={() => setActiveNotifications((prev) => !prev)}
            ref={notification_toggle_ref}
          >
            <NotificationsOutlinedIcon />
            <span className="badge">+9</span>
            <div ref={notification_ref}>
              <NotificationsList active={activeNotifications} />
            </div>
          </Button>
          <span
            style={{ marginLeft: '10px' }}
            onClick={() => setActiveUserDetails((prev) => !prev)}
            ref={profile_toggle_ref}
          >
            <AvatarBtn img={user.img} />
            <div ref={profile_ref}>
              <AccoutDetails active={activeUserDetails} />
            </div>
          </span>
        </Left>
      ) : (
        <div className="signin">
          <button>
            <MoreVert />
          </button>
          <SignInBtn />
        </div>
      )}
    </Container>
  )
}
