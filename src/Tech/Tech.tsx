import { useState } from 'react'
import '../App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>About this site</h2>
      <div className='card'>
        This is a site I'm developing using the <a href="cloudresumechallenge.dev">Cloud Resume Challenge</a>,
        partly because it's been a while since I've done any web dev, let alone any that isn't React and Node
        deployed in Docker containers via Jenkins.
      </div>

      <h2>So far</h2>
      <ul>
        <li>HTML, CSS, react-ts installed with vite, createBrowserRouter, used NavLink</li>
        <li>Prettier and ESLint</li>
        <li>S3 hosting with CloudFront</li>
        <li>Custom domain name registration and DNS</li>
        <li>Terraform</li>
        <li>The leaf logo is from Pixel Perfect on flaticon, with a premium license</li>
      </ul>

      <h2>Next</h2>
      <ul>
        <li>Unit tests</li>
        <li>Use GitHub Actions to deploy to S3</li>
        <li>Improve CSS</li>
        <li>Move site to actual URL lol</li>
      </ul>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You clicked on this button {count} {count === 1 ? "time" : "times"}
        </button>
      </div>
    </>
  )
}

export default Home
