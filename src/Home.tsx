import './App.css'

function Home() {

  return (
    <>
      <div className='card'>
        This is a site I'm developing using the <a href="cloudresumechallenge.dev">Cloud Resume Challenge</a>,
        partly because it's been a while since I've done any web dev, let alone any that isn't React and Node
        deployed in Docker containers via Jenkins.
      </div>
      <div className='card'>
        <em>
          If you don't like it, that's okay<br />
          'cause we will sing it anyway...<br />
        </em>
        -- The Muppets
      </div>
    </>
  )
}

export default Home
