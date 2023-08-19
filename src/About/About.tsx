import picOfLeaf from "../assets/jmrGlasses.jpeg"

const About = () => (
  <div>
    <div className='card'>
      <img
        src={picOfLeaf}
        width="250px"
        alt="Slightly blurry picture of smiling leaf with glasses and a plaid shirt."
      />

      <p>
        Hi! I'm Leaf. I've been working in technology for 25+ years, and I've been a developer for most of that time. My current title is Application Architect. While I do help dev teams with their application architecture, my passion is making life and work easier and more joyful for my developer colleagues.
      </p>
      <p>
        My current focus is on application and process observability. I'm a huge fan of the systems and organizational aspects of DevOps -- to me, DevOps is the set of collaborative practices for helping deliver value faster and safer. That you get happier dev teams in the process only makes it better.
      </p>
      <p>When I'm not staring at a screen, I like to look at birds, walk outside, and listen to audio books or music, sometimes all at once. I also spend a lot of time attaching lines to paper.
      </p>
    </div>

  </div>
);

export default About
