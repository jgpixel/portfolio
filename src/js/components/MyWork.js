import Component from '../Component.js';

export default class MyWork extends Component {
    static #projectIsReversed = false;
    static #moreProjectsShown = false;

    constructor(props, root) {
        super(props, root)
        this.#render();
    }

    #render() {
        const darkBg = document.createElement('div');
        darkBg.className = 'dark-bg';

        const projectsContainer = document.createElement('section');
        projectsContainer.id = 'work';
        projectsContainer.className = 'projects-container container section';

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

                showMoreProjectsBtn.textContent = 'Show More';

                MyWork.#projectIsReversed = true;
            } else {
                for (let i = 3; i < this.props.projects.length; i++) {
                    new Project({
                        ...this.props.projects[i],
                        isReversed: MyWork.#projectIsReversed
                    }, moreProjectsContainer);

                    showMoreProjectsBtn.textContent = 'Show Less';
                    
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
        super(props, root);
        this.#render();
    }

    #render() {
        const projectContainer = document.createElement('div');
        projectContainer.className = 'project-container fade-in';

        if (this.props.isReversed) {
            projectContainer.classList.add('reverse-project');
        }

        const websiteImgContainer = document.createElement('div');
        websiteImgContainer.className = 'website-img-container';

        const websiteImg = document.createElement('img');
        Component.setAttributes({
            class: 'website-img',
            src: this.props.websiteImg,
            alt: this.props.imageAlt,
            loading: 'lazy'
        }, websiteImg);

        const linksContainer = document.createElement('div');
        linksContainer.className = 'project-links-container';

        const websiteAnchor = document.createElement('a');
        Component.setAttributes({
            class: 'website-anchor',
            href: this.props.websiteLink,
            target: '_blank'
        }, websiteAnchor);

        const websiteLinkIcon = document.createElement('img');
        Component.setAttributes({
            class: 'project-link-icon',
            src: 'src/assets/icons/website-link-icon.svg',
            alt: 'Visit the website.'
        }, websiteLinkIcon);

        const githubAnchor = document.createElement('a');
        Component.setAttributes({
            class: 'github-anchor',
            href: this.props.githubLink,
            target: '_blank'
        }, githubAnchor);

        const githubIcon = document.createElement('img');
        Component.setAttributes({
            class: 'project-link-icon',
            src: 'src/assets/icons/github-icon.svg',
            alt: 'Visit the Github page.'
        }, githubIcon);

        const projectDetailsContainer = document.createElement('div');
        projectDetailsContainer.className = 'project-details';

        const websiteTitle = document.createElement('h4');
        websiteTitle.className = 'website-title';
        websiteTitle.textContent = this.props.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = this.props.description;

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

        if (this.props.githubLink) {
            linksContainer.appendChild(githubAnchor);
            githubAnchor.appendChild(githubIcon);
        }

        projectContainer.appendChild(projectDetailsContainer);
        projectDetailsContainer.appendChild(websiteTitle);
        projectDetailsContainer.appendChild(projectDescription);
        projectDetailsContainer.appendChild(technologiesUsedTitle);
        projectDetailsContainer.appendChild(technologiesUsedUl);

        this.props.technologiesUsed.forEach(technologyUsed => {
            const technology = document.createElement('li');
            technology.className = 'technology';
            technology.textContent = technologyUsed;
            technologiesUsedUl.appendChild(technology);
        });

        Component.fadeInAnimations(this.root);
    }
}