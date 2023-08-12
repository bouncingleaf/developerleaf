const Optimize = () => (
  <div>
    <h2 id="Optimize">Optimize as you iterate</h2>
    <p>
      I have forgotten a lot about React (and TypeScript) that I am now working to remember. A lot of this site is manually written out, meaning I'm starting with text and basic HTML markup. I can already see that I'm going to want some way to loop through a list of posts that each have `title` and `content`, and then I'll use those attributes to generate both the Table of Contents and the actual posts. I've forgotten how to do all that, but it'll come back to me like riding a bike. Well, easier than that, it's been decades since I've gotten on a bike and only about a year and a half since I've written any meaningful React.
    </p>
    <p>
      That's also unlikely to be the end state, but I can see that it's a step up from where I am. And that's how I think it should work - write the easy thing that meets the need now, expand and embellish and elaborate as needed as the needs expand. It's all iterative.
    </p>
    <p>
      On one hand, you don't want to paint yourself into a corner by writing something that will be difficult to expand when you need to later. On the other hand, I think I'm more likely to paint myself into a corner by trying to optimize too soon. If I start anticipating what my needs might be in the future, and I go to great lengths to try to accommodate them... well, those may or may not be the actual needs I have in the future.
    </p>
    <p>
      I caught myself just before I did this. "What if I make each of these into an object, and then I iterate through a list of objects?" Probably not a bad approach, but the real answer is probably more like having a database of the content and retrieving it from there. Let's stick with text and HTML until we get there.
    </p>
  </div>
);

export default Optimize
