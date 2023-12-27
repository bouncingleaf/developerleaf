import { Link } from "react-router-dom";

const LI = () => <Link to="https://www.linkedin.com/in/jmroy/">LinkedIn</Link>

const Medium = () => <Link to="https://bouncingleaf.medium.com/">Medium</Link>

const BouncingLeaf = () => <Link to="https://www.bouncingleaf.com">bouncingleaf.com</Link>

const Insta = () => <Link to="https://www.instagram.com/bouncingleaf/">Instagram</Link>

const Where = () =>
    <div>
        Other places to find me: <LI /> for work stuff, <Medium /> for my blog, <BouncingLeaf /> for art stuff, <Insta /> for infrequent personal photos.
    </div>

export default Where