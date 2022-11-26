
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import OnlinePredictionOutlinedIcon from '@mui/icons-material/OnlinePredictionOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

const allLinks ={
  first:[
    {
      title: "Home",
      link: "/",
      icon: <HomeOutlinedIcon />
    },
    {
      title: "Shorts",
      link: "/shorts",
      icon: <SlowMotionVideoOutlinedIcon />
    },
    {
      title: "Subsriptions",
      link: "/videos/subscriptions",
      icon: <SubscriptionsOutlinedIcon />
    }
  ],
  second:[
    {
      title: "Library",
      link: "/videos/libary",
      icon: <VideoLibraryOutlinedIcon />
    },
    {
      title: "History",
      link: "/videos/history",
      icon: <HistoryOutlinedIcon />
    },
    {
      title: "Your Videos",
      link: "/yourvideos",
      icon: <SlideshowOutlinedIcon />
    },
    {
      title: "Watch later",
      link: "/videos/vatchlatter",
      icon: <WatchLaterOutlinedIcon />
    },
    {
      title: "Liked Videos",
      link: "/videos/liked",
      icon: <ThumbUpOutlinedIcon />
    },
   
  ],
   explore:[
    {
      title: "Trending",
      link: "/videos/trend",
      icon: <ThumbUpOutlinedIcon />
    },
    {
      title: "Music",
      link: "/music/ramdom",
      icon: <MusicNoteOutlinedIcon />
    },
  
    {
      title: "Live",
      link: "/live",
      icon: <OnlinePredictionOutlinedIcon />
    },
    {
      title: "Gaming",
      link: "/game",
      icon: <OnlinePredictionOutlinedIcon />
    },
    {
      title: "News",
      link: "/news",
      icon: <NewspaperOutlinedIcon />
    },
    {
      title: "Sport",
      link: "/sport",
      icon: <FitnessCenterOutlinedIcon />
    },
    {
      title: "Learning",
      link: "/learn",
      icon: <LightbulbOutlinedIcon />
    },
    {
      title: "Fashion & beauty",
      link: "/fashion",
      icon: <PermMediaOutlinedIcon />
    },
    ], 
    last:[
      {
        title: "Setting",
        link: "/setting",
        icon: <SettingsOutlinedIcon />
      },
      {
        title: "Report history",
        link: "/report",
        icon: <OutlinedFlagIcon />
      },
      {
        title: "Help",
        link: "/help",
        icon: <HelpOutlineOutlinedIcon />
      },
      {
        title: "Send Feedback",
        link: "/feedback",
        icon: <FeedbackOutlinedIcon />
      },
    
    ]
} 
export default allLinks;