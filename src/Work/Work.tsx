import '../App.css'
import twpVideo from "../assets/Troubleshooting.mp4"

const RecentWork = () => {
  return <div className='card'>
    <p>In January of 2023, I did a lightning talk called "Troubleshooting While Panicking" for an organization called Inclusive Tech Hub that I don't believe exists anymore, sadly.
    </p>
    <video controls width="50%">
      <source src={twpVideo} type="video/mp4" />
      Sorry, looks like your browser doesn't support embedded videos. :(
    </video>
    <p>I'm happy at my current employer and not looking for new opportunities at this time.</p>
  </div>
}

export default RecentWork
