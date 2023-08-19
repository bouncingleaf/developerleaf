import '../App.css'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <h1>Hi! I'm Leaf.</h1>

      <div className='card'>
        <p>I'm a developer and application architect, working to make life and work easier for my developer colleagues. </p>
        <p>
          I'm developing this site using the <Link to="https://cloudresumechallenge.dev">Cloud Resume Challenge</Link>,
          partly because it's been a while since I've done any web dev, let alone any that isn't React and Node
          deployed in Docker containers via Jenkins.
        </p>
      </div>
    </>
  )
}

export default Home
