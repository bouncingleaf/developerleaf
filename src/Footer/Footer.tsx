import { Link } from "react-router-dom";

const LI = () => <Link to="https://www.linkedin.com/in/jmroy/">LinkedIn</Link>

const Medium = () => <Link to="https://bouncingleaf.medium.com/">Medium</Link>

const BouncingLeaf = () => <Link to="https://www.bouncingleaf.com">My art site</Link>

const Insta = () => <Link to="https://www.instagram.com/bouncingleaf/">Instagram</Link>

const Footer = () => (
    <div>
        Other places to find me: <LI /> - <Medium /> - <BouncingLeaf /> - <Insta />
    </div>
);

export default Footer
