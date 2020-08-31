function Blog(title, teaser, date){
    this.title = title;
    this.teaser = teaser;
    this.date = date;
}
let projectsList = [
    new Blog(
        "What a difference a few months makes...",
        "My experience two months into bootcamp.",
        "Dec 10, 2019"
    ),
    new Blog(
        "Half-full or half-empty? A quick look at Optimistic vs. Pessimistic Rendering",
        "At least 5–10 times a day, a random question/thought crosses my mind that requires a quick google search. The process is always the same…",
        "Jan 6, 2020"
    ),
    new Blog(
        "Brainstorming Your Next Coding Brainchild",
        "Or at least a few creative ideas to get you started",
        "Jun 19, 2020"
    ),
    new Blog(
        "CSS Specificity",
        "One of the more confusing (but important) pieces of CSS is specificity. I have to admit, this concept took me quite a while to grasp.",
        "Aug 18, 2020"
    ),
    new Blog(
        "Pólya’s Four Step Method — And How It Can Improve Your White Boarding",
        "Turns out the microwave oven was not the only useful tool invented in 1945",
        "Aug 19, 2020"
    ),
    new Blog(
        "Programming your brain to use keyboard shortcuts",
        "Keyboard shortcuts can be very underrated. For experienced programmers, many shortcuts are second nature.",
        "Aug 26, 2020"
    ),
    new Blog(
        "CSS Pseudo-Classes (including :nth-child)",
        "A highly effective, and fairly straight-forward, way to make your pages look better is by using CSS pseudo-classes (or pseudo-selectors).",
        "Aug 26, 2020"
    )
]

export default projectsList