import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';

const accountDetailsObj = {
  first: [
    { title: "Your channel", link: "/", icon: <AccountBoxOutlinedIcon /> },
    { title: "YouTube Studio", link: "/", icon: <SlowMotionVideoOutlinedIcon /> },
    { title: "Switch Account", link: "/", icon: <SwitchAccountOutlinedIcon />, options: ["nimadir"] },
    { title: "Sing Out", link: "/logout", icon: <ExitToAppOutlinedIcon /> },
  ],
  second: [
    { title: "Purchase and membership", link: "/", icon: <AttachMoneyOutlinedIcon /> },
    { title: "Your data in YouTube", link: "/", icon: <AdminPanelSettingsOutlinedIcon /> },
  ],
  third: [
    { title: "Appearance", link: "/", icon: <SettingsBrightnessOutlinedIcon />, options: ["nimadir"] },
    { title: "Language", link: "/", icon: <TranslateOutlinedIcon />, options: ["nimadir"] },
    { title: "Restricted Mode", link: "/", icon: <SecurityOutlinedIcon />, options: ["nimadir"] },
    { title: "Location", link: "/", icon: <LanguageOutlinedIcon />, options: ["nimadir"] },
    { title: "Keyboard shortcuts", link: "/", icon: <KeyboardOutlinedIcon />, options: ["nimadir"] },
  ]
}

export default accountDetailsObj;