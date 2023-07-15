import { useState } from 'react'
import '../App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>So far</h2>
      <ul>
        <li>HTML, CSS, react-ts installed with vite, createBrowserRouter</li>
        <li>Prettier and ESLint</li>
        <li>S3 hosting with CloudFront</li>
        <li>Custom domain name registration and DNS</li>
        <li>Terraform</li>
      </ul>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clicked on this button {count} {count === 1 ? "time" : "times"}
        </button>
      </div>
    </>
  )
}

export default Home
