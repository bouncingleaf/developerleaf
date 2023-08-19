import { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Tech() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>About this site</h1>
      <div className='card'>
        I'm developing this site using the <Link to="https://cloudresumechallenge.dev">Cloud Resume Challenge</Link>,
        partly because it's been a while since I've done any web dev, let alone any that isn't React and Node
        deployed in Docker containers via Jenkins.
      </div>

      <div className="flex">

        <div>
          <h2>So far</h2>
          <div className="card">
            <ul>
              <li>HTML, CSS, react-ts installed with vite, createBrowserRouter, used NavLink</li>
              <li>Prettier and ESLint</li>
              <li>S3 hosting with CloudFront</li>
              <li>Custom domain name registration and DNS</li>
              <li>Terraform</li>
              <li>The leaf logo is from Pixel Perfect on flaticon, with a premium license</li>
              <li>Used <a href="https://yarnpkg.com/getting-started/editor-sdks#vscode">yarn sdks</a></li>
              <li>Moved site from S3 to AWS Amplify and back</li>
            </ul>
          </div>

        </div>
        <div>
          <h2>Next</h2>
          <div className="card">
            <ul>
              <li>Unit tests</li>
              <li>Use GitHub Actions to deploy to S3</li>
              <li>Improve CSS</li>
            </ul>
          </div>

          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              You clicked on this button {count} {count === 1 ? "time" : "times"}
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Tech
