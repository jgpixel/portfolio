export default class MyWork {
    projectIsReversed = false;

    constructor(props, root) {
        this.props = props;
        this.root = root;

        this.#render();
    }

    #render() {

    }
}

class Project {
    constructor(props, root) {
        this.props = props;
        this.root = root;

        this.#render();
    }

    #render() {

    }
}

let isProjectReversed = false;

class Projectt {
    constructor(title, siteLink, githubLink, imageName, altText, description, technologiesUsed) {
        this.title = title;
        this.siteLink = siteLink;
        this.githubLink = githubLink;
        this.imageName = imageName;
        this.altText = altText;
        this.description = description;
        this.technologiesUsed = technologiesUsed;
    }

    createProject() {
        const projectDiv = document.createElement("div");
        const siteImageContainer = document.createElement("div");
        const siteImage = document.createElement("img");
        const siteLinkAnchor = document.createElement("a");
        const siteLinkIcon = document.createElement("img");
        const githubAnchor = document.createElement("a");
        const githubLogo = document.createElement("img");
        const projectInfoDiv = document.createElement("div");
        const websiteTitle = document.createElement("h5");
        const descriptionEl = document.createElement("p");
        const technologiesUsedTitle = document.createElement("p");
        const technologiesUsedUl = document.createElement("ul");
        const linksContainer = document.createElement("div");

        workRoot.appendChild(projectDiv);
            projectDiv.classList.add("project");
            projectDiv.classList.add("fade-in")

        if (isProjectReversed) {
            projectDiv.classList.add("flip");
        }
        projectDiv.appendChild(siteImageContainer);
            siteImageContainer.classList.add("site-image");
        siteImageContainer.appendChild(linksContainer);
            linksContainer.classList.add("links-container");
        linksContainer.appendChild(siteLinkAnchor);
            this.setAttributes(siteLinkAnchor, { "href": this.siteLink, "target": "_blank" });
        siteLinkAnchor.appendChild(siteLinkIcon);
            siteLinkIcon.classList.add("link-icon");
            siteLinkIcon.setAttribute("src", "src/images/icons/link-icon.svg");
        linksContainer.appendChild(githubAnchor);
            this.setAttributes(githubAnchor, { "href": this.githubLink, "target": "_blank" });
        githubAnchor.appendChild(githubLogo);
            githubLogo.classList.add("link-icon");
            githubLogo.setAttribute("src", "src/images/icons/github-logo.svg");
        siteImageContainer.appendChild(siteImage);
            siteImage.classList.add("card-image");
            this.setAttributes(siteImage, { "src": "src/images/" + this.imageName, "alt": this.altText, "draggable": "false" });
        projectDiv.appendChild(projectInfoDiv);
            projectInfoDiv.classList.add("project-info");
        projectInfoDiv.appendChild(websiteTitle);
            websiteTitle.textContent = this.title;
        projectInfoDiv.appendChild(descriptionEl);
            descriptionEl.classList.add("light-text");
            descriptionEl.textContent = this.description;
        projectInfoDiv.appendChild(technologiesUsedTitle);
            technologiesUsedTitle.classList.add("light-text");
            technologiesUsedTitle.textContent = "Technologies used:";
        projectInfoDiv.append(technologiesUsedUl);
        technologiesUsedUl.classList.add("technologies-used-list");
        
        this.technologiesUsed.forEach(technology => {
            const li = document.createElement("li");
            technologiesUsedUl.appendChild(li);
            li.textContent = technology;
        });

        isProjectReversed = !isProjectReversed;
    }

    setAttributes(element, attributes) {
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
}