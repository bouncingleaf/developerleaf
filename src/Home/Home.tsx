import { Link } from 'react-router-dom'
import '../App.css'
import picOfLeaf from "../assets/jmrGlasses.jpeg"
import Footer from '../Footer/Footer'
import Tech from '../Tech/Tech'

const Pic = () => {
  return <div className='card'>
    <img
      src={picOfLeaf}
      width="100px"
      alt="Slightly blurry picture of smiling leaf with glasses and a plaid shirt."
    />
  </div>
}

const About = () => {
  return <div className='card'>
    <p>
      I've been working in technology for 25+ years, and I've been a developer for most of that time. My current title is Application Architect. While I do help dev teams with their application architecture, my passion is making life and work easier and more joyful for my developer colleagues.
    </p>
    <p>
      My current focus is on application and process observability. I'm a huge fan of the systems and organizational aspects of DevOps -- to me, DevOps is the set of collaborative practices for helping deliver value faster and safer. That you get happier dev teams in the process only makes it better.
    </p>
    <p>You can find more details about my work <Link to="work">here</Link> and on <Link to="https://www.linkedin.com/in/jmroy/">LinkedIn</Link>.</p>
    <p>I'm happy at my current employer and not looking for new opportunities at this time.</p>
    <p>When I'm not staring at a screen, I like to look at birds, walk outside, and listen to audio books or music, sometimes all at once. I also spend a lot of time attaching lines to paper.
    </p>

  </div>

}

function Home() {

  return (
    <>
      <h1>Hi! I'm Leaf.</h1>
      <div className="flex">
        <Pic />
        <About />
        <div className="card">
          <Footer />
        </div>
      </div>
      <Tech />
    </>
  )
}

export default Home
