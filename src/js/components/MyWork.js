import Component from '../Component.js';

export default class MyWork {
    static #projectIsReversed = false;
    static #moreProjectsShown = false;

    constructor(props, root) {
        this.props = props;
        this.root = root;

        this.#render();
    }

    #render() {
        const darkBg = document.createElement('div');
        darkBg.className = 'dark-bg';

        const projectsContainer = document.createElement('section');
        projectsContainer.id = 'my-work';
        projectsContainer.classList.add('projects-container', 'container');

        const title = document.createElement('h2');
        title.className = 'section-header';
        title.textContent = 'My Work';

        this.root.appendChild(darkBg);
        darkBg.appendChild(projectsContainer);
        projectsContainer.appendChild(title);

        for (let i = 0; i < 3; i++) {
            new Project({
                ...this.props.projects[i],
                isReversed: MyWork.#projectIsReversed
            }, projectsContainer);
            
            MyWork.#projectIsReversed = !MyWork.#projectIsReversed;
        }

        const moreProjectsContainer = document.createElement('div');
        moreProjectsContainer.className = 'projects-container';
        projectsContainer.appendChild(moreProjectsContainer);

        const showMoreProjectsBtn = document.createElement('button');
        showMoreProjectsBtn.className = 'red-button';
        showMoreProjectsBtn.textContent = 'Show More';
        
        showMoreProjectsBtn.addEventListener('click', () => {
            if (MyWork.#moreProjectsShown) {
                const projects = document.querySelectorAll('.project-container');
                
                for (let i = 3; i < projects.length; i++) {
                    projects[i].remove();
                }

                MyWork.#projectIsReversed = true;
            } else {
                for (let i = 3; i < this.props.projects.length; i++) { // TODO: isolate loop to method
                    new Project({
                        ...this.props.projects[i],
                        isReversed: MyWork.#projectIsReversed
                    }, moreProjectsContainer);
                    
                    MyWork.#projectIsReversed = !MyWork.#projectIsReversed;
                }
            }

            MyWork.#moreProjectsShown = !MyWork.#moreProjectsShown;
        });

        projectsContainer.appendChild(showMoreProjectsBtn);
    }
}

class Project extends Component {
    constructor(props, root) {
        super();
        this.props = props;
        this.root = root;

        this.#render();
    }

    #render() {
        const projectContainer = document.createElement('div');
        projectContainer.className = 'project-container';

        if (this.props.isReversed) {
            projectContainer.classList.add('reverse-project');
        }

        const websiteImgContainer = document.createElement('div');
        websiteImgContainer.className = 'website-img-container';

        const websiteImg = document.createElement('img');
        this.setAttributes({
            class: 'website-img',
            src: 'src/assets/images/my-work-imgs/wordle.png',
            alt: this.props.imageAlt
        }, websiteImg);

        const linksContainer = document.createElement('div');
        linksContainer.className = 'project-links-container';

        const websiteAnchor = document.createElement('a');
        this.setAttributes({
            class: 'website-anchor',
            href: this.props.websiteLink,
            target: '_blank'
        }, websiteAnchor);

        const websiteLinkIcon = document.createElement('img');
        this.setAttributes({
            class: 'project-link-icon',
            src: '',
            alt: 'Visit the website.'
        }, websiteLinkIcon);

        const githubAnchor = document.createElement('a');
        this.setAttributes({
            class: 'github-anchor',
            href: this.props.githubLink,
            target: '_blank'
        }, githubAnchor);

        const githubIcon = document.createElement('img');
        this.setAttributes({
            class: 'project-link-icon',
            src: '',
            alt: 'Visit the Github page.'
        }, githubIcon);

        const projectDetailsContainer = document.createElement('div');
        projectDetailsContainer.className = 'project-details';

        const websiteTitle = document.createElement('h4');
        websiteTitle.className = 'website-title';
        websiteTitle.textContent = this.props.title;

        const websiteDescription = document.createElement('p');
        websiteDescription.textContent = this.props.description;

        const technologiesUsedTitle = document.createElement('p');
        technologiesUsedTitle.textContent = 'Technologies used:'

        const technologiesUsedUl = document.createElement('ul');
        technologiesUsedUl.className = 'technologies-used';

        this.root.appendChild(projectContainer);
        projectContainer.appendChild(websiteImgContainer);

        websiteImgContainer.appendChild(websiteImg);
        websiteImgContainer.appendChild(linksContainer);

        linksContainer.appendChild(websiteAnchor);
        websiteAnchor.appendChild(websiteLinkIcon);
        linksContainer.appendChild(githubAnchor);
        githubAnchor.appendChild(githubIcon);

        projectContainer.appendChild(projectDetailsContainer);
        projectDetailsContainer.appendChild(websiteTitle);
        projectDetailsContainer.appendChild(websiteDescription);
        projectDetailsContainer.appendChild(technologiesUsedTitle);
        projectDetailsContainer.appendChild(technologiesUsedUl);

        this.props.technologiesUsed.forEach(technologyUsed => {
            const technology = document.createElement('li');
            technology.className = 'technology';
            technology.textContent = technologyUsed;
            technologiesUsedUl.appendChild(technology);
        });




        // this.root.appendChild(projectDiv);
        //     projectDiv.classList.add("project");
        //     projectDiv.classList.add("fade-in")

        // if (isProjectReversed) {
        //     projectDiv.classList.add("flip");
        // }
        // projectDiv.appendChild(siteImageContainer);
        //     siteImageContainer.classList.add("site-image");
        // siteImageContainer.appendChild(linksContainer);
        //     linksContainer.classList.add("links-container");
        // linksContainer.appendChild(siteLinkAnchor);
        //     // this.setAttributes(siteLinkAnchor, { "href": this.siteLink, "target": "_blank" });
        // siteLinkAnchor.appendChild(siteLinkIcon);
        //     siteLinkIcon.classList.add("link-icon");
        //     siteLinkIcon.setAttribute("src", "src/images/icons/link-icon.svg");
        // linksContainer.appendChild(githubAnchor);
        //     // this.setAttributes(githubAnchor, { "href": this.githubLink, "target": "_blank" });
        // githubAnchor.appendChild(githubLogo);
        //     githubLogo.classList.add("link-icon");
        //     githubLogo.setAttribute("src", "src/images/icons/github-logo.svg");
        // siteImageContainer.appendChild(siteImage);
        //     siteImage.classList.add("card-image");
        //     // this.setAttributes(siteImage, { "src": "src/images/" + this.imageName, "alt": this.altText, "draggable": "false" });
        // projectDiv.appendChild(projectInfoDiv);
        //     projectInfoDiv.classList.add("project-info");
        // projectInfoDiv.appendChild(websiteTitle);
        //     websiteTitle.textContent = this.title;
        // projectInfoDiv.appendChild(descriptionEl);
        //     descriptionEl.classList.add("light-text");
        //     descriptionEl.textContent = this.description;
        // projectInfoDiv.appendChild(technologiesUsedTitle);
        //     technologiesUsedTitle.classList.add("light-text");
        //     technologiesUsedTitle.textContent = "Technologies used:";
        // projectInfoDiv.append(technologiesUsedUl);
        // technologiesUsedUl.classList.add("technologies-used-list");
        
        // this.technologiesUsed.forEach(technology => {
        //     const li = document.createElement("li");
        //     technologiesUsedUl.appendChild(li);
        //     li.textContent = technology;
        // });
    }
}

// let isProjectReversed = false;

// class Projectt {
//     constructor(title, siteLink, githubLink, imageName, altText, description, technologiesUsed) {
//         this.title = title;
//         this.siteLink = siteLink;
//         this.githubLink = githubLink;
//         this.imageName = imageName;
//         this.altText = altText;
//         this.description = description;
//         this.technologiesUsed = technologiesUsed;
//     }

//     createProject() {
//         const projectDiv = document.createElement("div");
//         const siteImageContainer = document.createElement("div");
//         const siteImage = document.createElement("img");
//         const siteLinkAnchor = document.createElement("a");
//         const siteLinkIcon = document.createElement("img");
//         const githubAnchor = document.createElement("a");
//         const githubLogo = document.createElement("img");
//         const projectInfoDiv = document.createElement("div");
//         const websiteTitle = document.createElement("h5");
//         const descriptionEl = document.createElement("p");
//         const technologiesUsedTitle = document.createElement("p");
//         const technologiesUsedUl = document.createElement("ul");
//         const linksContainer = document.createElement("div");
//         const workRoot = '';

//         workRoot.appendChild(projectDiv);
//             projectDiv.classList.add("project");
//             projectDiv.classList.add("fade-in")

//         if (isProjectReversed) {
//             projectDiv.classList.add("flip");
//         }
//         projectDiv.appendChild(siteImageContainer);
//             siteImageContainer.classList.add("site-image");
//         siteImageContainer.appendChild(linksContainer);
//             linksContainer.classList.add("links-container");
//         linksContainer.appendChild(siteLinkAnchor);
//             this.setAttributes(siteLinkAnchor, { "href": this.siteLink, "target": "_blank" });
//         siteLinkAnchor.appendChild(siteLinkIcon);
//             siteLinkIcon.classList.add("link-icon");
//             siteLinkIcon.setAttribute("src", "src/images/icons/link-icon.svg");
//         linksContainer.appendChild(githubAnchor);
//             this.setAttributes(githubAnchor, { "href": this.githubLink, "target": "_blank" });
//         githubAnchor.appendChild(githubLogo);
//             githubLogo.classList.add("link-icon");
//             githubLogo.setAttribute("src", "src/images/icons/github-logo.svg");
//         siteImageContainer.appendChild(siteImage);
//             siteImage.classList.add("card-image");
//             this.setAttributes(siteImage, { "src": "src/images/" + this.imageName, "alt": this.altText, "draggable": "false" });
//         projectDiv.appendChild(projectInfoDiv);
//             projectInfoDiv.classList.add("project-info");
//         projectInfoDiv.appendChild(websiteTitle);
//             websiteTitle.textContent = this.title;
//         projectInfoDiv.appendChild(descriptionEl);
//             descriptionEl.classList.add("light-text");
//             descriptionEl.textContent = this.description;
//         projectInfoDiv.appendChild(technologiesUsedTitle);
//             technologiesUsedTitle.classList.add("light-text");
//             technologiesUsedTitle.textContent = "Technologies used:";
//         projectInfoDiv.append(technologiesUsedUl);
//         technologiesUsedUl.classList.add("technologies-used-list");
        
//         this.technologiesUsed.forEach(technology => {
//             const li = document.createElement("li");
//             technologiesUsedUl.appendChild(li);
//             li.textContent = technology;
//         });

//         isProjectReversed = !isProjectReversed;
//     }

//     setAttributes(element, attributes) {
//         for (const key in attributes) {
//             element.setAttribute(key, attributes[key]);
//         }
//     }
// }