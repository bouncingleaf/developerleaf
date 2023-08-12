import { Link } from "react-router-dom";

const About = () => (
  <div>
    <h1>Hi! I'm Leaf.</h1>
    <div className='card'>
      <p>
        I've been working in technology for 25+ years, and I've been a developer for most of that time. My current title is Application Architect. While I do help dev teams with their application architecture, my passion is making life and work easier and more joyful for my developer colleagues.
      </p>
      <p>
        My current focus is on application and process observability. I'm a huge fan of the systems and organizational aspects of DevOps -- to me, DevOps is the set of collaborative practices for helping deliver value faster and safer. That you get happier dev teams in the process only makes it better.
      </p>
      <p>When I'm not staring at a screen, I like to look at birds, walk outside, and listen to audio books or music, sometimes all at once. I also spend a lot of time attaching lines to paper.
      </p>
    </div>

    <h1>Learning stuff</h1>
    <div className="card">
      <p>
        Here are some of the books I've been reading lately:
      </p>
      <ul>
        <li><Link to="https://itrevolution.com/product/the-phoenix-project/">The Phoenix Project</Link> - start here.</li>
        <li><Link to="https://itrevolution.com/product/the-devops-handbook-second-edition/">The DevOps Handbook</Link> - the practical companion to The Phoenix Project.</li>
        <li><Link to="https://itrevolution.com/product/team-topologies/">Team Topologies</Link></li>
        <li><Link to="https://itrevolution.com/product/project-to-product/">Project to Product</Link></li>
        <li><Link to="https://itrevolution.com/product/accelerate/">Accelerate</Link></li>
        <li><Link to="https://info.honeycomb.io/observability-engineering-oreilly-book-2022">Observability Engineering</Link> - my handbook right now for working with observability</li>
      </ul>
      <p>
        I also highly recommend the videos at <Link to="https://videos.itrevolution.com/">ITRevolution.com</Link> - signup is free and it gets you 10 free videos per month.
      </p>
    </div>
  </div>
);

export default About
