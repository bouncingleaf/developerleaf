import { Link } from "react-router-dom";

const Footer = () => (
    <div>
        <hr />
        Other places to find me: <BouncingLeaf /> - <Insta />
    </div>
);

const BouncingLeaf = () => <Link to="https://www.bouncingleaf.com">my art site</Link>

const Insta = () => <Link to="https://www.instagram.com/bouncingleaf/">insta</Link>


export default Footer
