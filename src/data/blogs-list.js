function Blog(title, teaser, date, link){
    this.title = title;
    this.teaser = teaser;
    this.date = date;
    this.link = link;
}
let projectsList = [
    new Blog(
        "How to use switch statements in Javascript (with examples)",
        "Switch statements are used, primarily, when you have logic that would otherwise be written as a long-winded conditional statement. ",
        "Oct 31, 2020",
        "https://bentagtow.medium.com/how-to-use-switch-statements-in-javascript-with-examples-a0e553edfcdf"
    ),
    new Blog(
        "When to use Double Equals and when to use Triple Equals in JavaScript: == vs. ===",
        "Knowing the differences between both the purpose and functionality of the two operators is a foundational piece of being a JavaScript developer",
        "Oct 24, 2020",
        "https://bentagtow.medium.com/when-to-use-double-equals-and-when-to-use-triple-equals-in-javascript-vs-bb8b49d560b5"
    ),
    new Blog(
        "Event Bubbling (and how to stop it using event.stopPropagation)",
        "The principle of event bubbling states that: When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.",
        "Oct 16, 2020",
        "https://bentagtow.medium.com/event-bubbling-and-how-to-stop-it-using-event-stoppropagation-405d4c7c8ac8"
    ),
    new Blog(
        "CSS Pseudo-Classes (including :nth-child)",
        "A highly effective, and fairly straight-forward, way to make your pages look better is by using CSS pseudo-classes (or pseudo-selectors).",
        "Aug 26, 2020",
        "https://medium.com/@bentagtow/css-pseudo-classes-including-nth-child-752cfc6fa4c3"
    ),
    new Blog(
        "Programming your brain to use keyboard shortcuts",
        "Keyboard shortcuts can be very underrated. For experienced programmers, many shortcuts are second nature.",
        "Aug 26, 2020",
        "https://medium.com/@bentagtow/programming-your-brain-to-use-keyboard-shortcuts-5be31e5f37c2"

    ),
    new Blog(
        "Pólya’s Four Step Method — And How It Can Improve Your White Boarding",
        "Turns out the microwave oven was not the only useful tool invented in 1945",
        "Aug 19, 2020",
        "https://medium.com/dev-genius/p%C3%B3lyas-four-step-method-and-how-it-can-improve-your-white-boarding-452eb90d7b0b"

    ),
    new Blog(
        "CSS Specificity",
        "One of the more confusing (but important) pieces of CSS is specificity. I have to admit, this concept took me quite a while to grasp.",
        "Aug 18, 2020",
        "https://medium.com/dev-genius/css-specificity-17649dadff14"

    ),
    new Blog(
        "Brainstorming Your Next Coding Brainchild",
        "A few creative ideas to get your next project started",
        "Jun 19, 2020",
        "https://medium.com/dev-genius/brainstorming-your-next-coding-brainchild-f17b23540c0f"

    ),
    new Blog(
        "Half-full or half-empty? A quick look at Optimistic vs. Pessimistic Rendering",
        "At least 5–10 times a day, a random question/thought crosses my mind that requires a quick google search. The process is always the same…",
        "Jan 6, 2020",
        "https://medium.com/@bentagtow/half-full-or-half-empty-a-quick-look-at-optimistic-vs-pessimistic-rendering-dd73f24cc1bd"

    ),
    new Blog(
        "What a difference a few months makes...",
        "My experience two months into bootcamp.",
        "Dec 10, 2019",
        "https://medium.com/@bentagtow/what-a-difference-a-few-months-makes-a708a3675336"
    ),
    
]

export default projectsList