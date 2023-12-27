import { Link } from "react-router-dom";

const LI = () => <Link to="https://www.linkedin.com/in/jmroy/">LinkedIn</Link>

const Medium = () => <Link to="https://bouncingleaf.medium.com/">Medium</Link>

const BouncingLeaf = () => <Link to="https://www.bouncingleaf.com">My art site</Link>

const Insta = () => <Link to="https://www.instagram.com/bouncingleaf/">Instagram</Link>

const Footer = () => (
    <div>
        Other places to find me: <LI /> - <Medium /> - <BouncingLeaf /> - <Insta />
        <p className="footer">All opinions and statements expressed by me, here or elsewhere, are completely my own and don't necessarily represent my employer, my family, my friends, the schools I attended, the neighborhood I grew up in, people who look like me, the stores where I buy groceries, or anyone else.</p>
    </div>
);

export default Footer
