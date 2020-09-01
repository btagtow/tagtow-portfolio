function Project(title, description, frontEndLanguages, backEndLanguages, githubFront, githubBack, url){
    this.title = title;
    this.description = description;
    this.frontEndLanguages = frontEndLanguages;
    this.backEndLanguages = backEndLanguages;
    this.githubFront = githubFront;
    this.githubBack = githubBack;
    this.url = url;
}
let projectsList = [
    new Project(
        "The Broke Gambler", 
        "A site for gambling", 
        "React", 
        "Ruby, Rails", 
        "https://github.com/btagtow/sports-predictions-front", 
        "https://github.com/btagtow/sports-predictions-back",
        ""
        ),
    new Project(
        "Tic-Tag-Tow", 
        "A classy take on a classic game", 
        "Vanilla Javascript", 
        "", 
        "https://github.com/btagtow/tic-tag-tow", 
        "",
        "https://tic-tag-tow.web.app/"
        ),
    new Project(
        "Pet-Adopter",
        "Find your new best friend",
        "Vanilla Javascript",
        "Rails",
        "https://github.com/btagtow/adopt-an-animal-frontend",
        "https://github.com/btagtow/adopt-a-pet-backend",
        ""
        )
]

export default projectsList