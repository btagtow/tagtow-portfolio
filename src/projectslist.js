function Project(title, description, frontEndLanguages, backEndLanguages, github, url){
    this.title = title;
    this.description = description;
    this.frontEndLanguages = frontEndLanguages;
    this.backEndLanguages = backEndLanguages;
    this.github = github;
    this.url = url;
}
let projectsList = [
    new Project("The Broke Gambler", "A site for gambling", "React", "Ruby", "git", "urlurlurl"),
    new Project("Tic-Tag-Tow", "A classy take on a classic game", "Vanilla Javascript", "", "git", "urlurlurl"),
    new Project("Pet-Adopter")
]

export default projectsList