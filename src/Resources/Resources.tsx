import { Link } from "react-router-dom";

const Resources = () => (
  <div>
    <h1>Resources</h1>
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

export default Resources
