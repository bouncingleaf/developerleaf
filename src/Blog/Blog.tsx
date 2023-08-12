import MultipleNew from "./Posts/MultipleNew";
import Optimize from "./Posts/Optimize";
import ThinkingErrors from "./Posts/ThinkingErrors";

const Top = () => (
  <>
    <a href="#">go to top</a>
  </>
)

const TOC = () => (
  // There are better ways to do this but I forget what they are :)
  <ul>
    <li><a href="#Optimize">Optimize as you iterate</a></li>
    <li><a href="#ThinkingErrors">Thinking errors</a></li>
    <li><a href="#MultipleNew">Multiple new things at once</a></li>
    <li><a href="#HelloWorld">Hello World</a></li>
  </ul>
)

const Blog = () => (
  <div>
    <TOC />
    <Optimize />
    <Top />
    <ThinkingErrors />
    <Top />
    <MultipleNew />
    <Top />
    <h2 id="HelloWorld">Hello World</h2>
    <p>
      Another technology playground established, another Hello World written.
    </p>
    <Top />
  </div>
);

export default Blog
