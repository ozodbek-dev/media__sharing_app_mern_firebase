import AudioFileIcon from '@mui/icons-material/AudioFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
const addMediaFilesLinks = [
  {
    title: "Upload Video",
    link: "/upload/video",
    icon: < SlideshowIcon/>
  },
  {
    title: "Upload Song",
    link: "/upload/song",
    icon: < AudioFileIcon/>
  },
  {
    title: "Upload Image",
    link: "/upload/image",
    icon: < AddPhotoAlternateIcon/>
  },

  {
    title: "Live",
    link: "/live",
    icon: < OnlinePredictionIcon/>
  },
]
export default addMediaFilesLinks