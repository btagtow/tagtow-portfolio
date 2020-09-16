function Project(title, description, frontEndLanguages, backEndLanguages, githubFront, githubBack, url, inADay){
    this.title = title;
    this.description = description;
    this.frontEndLanguages = frontEndLanguages;
    this.backEndLanguages = backEndLanguages;
    this.githubFront = githubFront;
    this.githubBack = githubBack;
    this.url = url;
    this.inADay = inADay;
}
let projectsList = [
    //make a "daily schedule" project, modeled after that stupid 
    //productivity workshop jeff had you attend
    new Project(
        "Sports Predictor", 
        "Master the art of sports betting (using our free betting points)", 
        "React", 
        "Ruby, Rails", 
        "https://github.com/btagtow/sports-predictions-front", 
        "https://github.com/btagtow/sports-predictions-back",
        "",
        false
        ),
    new Project(
        "Tic-Tag-Tow", 
        "A classy take on a classic game.", 
        "Vanilla Javascript", 
        "", 
        "https://github.com/btagtow/tic-tag-tow", 
        "",
        "https://tic-tag-tow.web.app/",
        true
        ),
    new Project(
        "Pet Adopter",
        "Find your new best friend.",
        "Vanilla Javascript",
        "Rails",
        "https://github.com/btagtow/adopt-an-animal-frontend",
        "https://github.com/btagtow/adopt-a-pet-backend",
        "",
        false
        )
]

export default projectsList