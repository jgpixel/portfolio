import Component from '../Component.js';

const projects = [
    {
        title: 'TitanFlow',
        websiteLink: 'https://titanflow.vercel.app/',
        githubLink: 'https://github.com/jgpixel/titanflow-next',
        websiteImg: 'src/assets/images/my-work-imgs/titanflow-next.webp',
        imageAlt: 'The home page of TitanFlow\'s website.',
        description: 'Website for stock options flow service "TitanFlow," featuring a blog connected to a CMS.',
        technologiesUsed: [
            'React.JS',
            'Next.JS',
            'Tailwind CSS',
            'Hygraph CMS',
            'GraphQL'
        ]
    },
    {
        title: 'Color Palette Generator Figma Plugin',
        websiteLink: 'https://www.figma.com/community/plugin/1113856043179009368/Color-Palette-Generator',
        githubLink: 'https://github.com/jgpixel/figma-color-palette-generator',
        websiteImg: 'src/assets/images/my-work-imgs/figma-plugin.webp',
        imageAlt: 'Thumbnail image for my Figma plugin.',
        description: 'Use this plugin to setup the color palette for your designs! Built-in with options for hex, RGB, and HSL color formats.',
        technologiesUsed: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript'
        ]
    },
    {
        title: 'Wordle Clone',
        websiteLink: 'https://justinswordle.netlify.app',
        githubLink: 'https://github.com/jgpixel/WordleClone',
        websiteImg: 'src/assets/images/my-work-imgs/wordle.webp',
        imageAlt: 'Wordle Clone.',
        description: 'A clone of the hit game "Wordle".',
        technologiesUsed: [
            'HTML',
            'CSS',
            'JavaScript'
        ]
    },
    {
        title: 'NFT+',
        websiteLink: 'https://www.figma.com/proto/oOS4radHzRBZOTIvvzbDyi/NFT%2B?node-id=0%3A1141&scaling=contain&page-id=0%3A1&starting-point-node-id=0%3A1141',
        githubLink: null,
        websiteImg: 'src/assets/images/my-work-imgs/nft+.webp',
        imageAlt: 'NFT+ frames.',
        description: 'Design mockup for a concept NFT trading platform. Click the link to see clickable prototype!',
        technologiesUsed: [
            'Figma',
            'Prototyping'
        ]
    },
    // {
    //     title: 'TitanFlow',
    //     websiteLink: 'https://www.titanflow.io',
    //     githubLink: null,
    //     websiteImg: 'src/assets/images/my-work-imgs/titanflow.webp',
    //     imageAlt: 'TitanFlow landing page.',
    //     description: 'Website for stock options flow service.',
    //     technologiesUsed: [
    //         'Webflow'
    //     ]
    // },
    {
        title: 'Todo List',
        websiteLink: 'https://frontend-mentor-todo-app-challenge.netlify.app/',
        githubLink: 'https://github.com/jgpixel/Frontend-Mentor-Todo-App',
        websiteImg: 'src/assets/images/my-work-imgs/todo-list.webp',
        imageAlt: 'To do list.',
        description: 'Front-end challenge from Frontend Mentor.',
        technologiesUsed: [
            'HTML',
            'CSS',
            'JavaScript'
        ]
    },
    {
        title: 'JG Piano',
        websiteLink: 'https://jgpiano.netlify.app',
        githubLink: 'https://github.com/jgpixel/jg-piano',
        websiteImg: 'src/assets/images/my-work-imgs/jg-piano.webp',
        imageAlt: 'Landing page of JG Piano.',
        description: 'My piano portfolio!',
        technologiesUsed: [
            'HTML',
            'CSS',
            'JavaScript',
            'Contentful CMS'
        ]
    }
];

export default class Projects extends Component {
    static projectIsReversed = false;
    static moreProjectsShown = false;

    constructor(props, root) {
        super(props, root)
        this.render();
    }

    render() {
        const darkBg = document.createElement('div');
        darkBg.className = 'dark-bg';

        const projectsContainer = document.createElement('section');
        projectsContainer.id = 'projects';
        projectsContainer.className = 'projects-container container section';

        const title = document.createElement('h2');
        title.className = 'section-header';
        title.textContent = 'My Projects';

        this.root.appendChild(darkBg);
        darkBg.appendChild(projectsContainer);
        projectsContainer.appendChild(title);

        for (let i = 0; i < 3; i++) {
            new Project({
                ...projects[i],
                isReversed: Projects.projectIsReversed
            }, projectsContainer);
            
            Projects.projectIsReversed = !Projects.projectIsReversed;
        }

        const moreProjectsContainer = document.createElement('div');
        moreProjectsContainer.className = 'projects-container';
        projectsContainer.appendChild(moreProjectsContainer);

        const showMoreProjectsBtn = document.createElement('button');
        showMoreProjectsBtn.className = 'red-button';
        showMoreProjectsBtn.textContent = 'Show More';
        
        showMoreProjectsBtn.addEventListener('click', () => {
            if (Projects.moreProjectsShown) {
                const projects = document.querySelectorAll('.project-container');
                
                for (let i = 3; i < projects.length; i++) {
                    projects[i].remove();
                }

                showMoreProjectsBtn.textContent = 'Show More';

                Projects.projectIsReversed = true;
            } else {
                for (let i = 3; i < projects.length; i++) {
                    new Project({
                        ...projects[i],
                        isReversed: Projects.projectIsReversed
                    }, moreProjectsContainer);

                    showMoreProjectsBtn.textContent = 'Show Less';
                    
                    Projects.projectIsReversed = !Projects.projectIsReversed;
                }
            }

            Projects.moreProjectsShown = !Projects.moreProjectsShown;
        });

        projectsContainer.appendChild(showMoreProjectsBtn);
    }
}

class Project extends Component {
    constructor(props, root) {
        super(props, root);
        this.render();
    }

    render() {
        const projectContainer = document.createElement('div');
        projectContainer.className = 'project-container fade-in';

        if (this.props.isReversed) {
            projectContainer.classList.add('reverse-project');
        }

        const websiteImgContainer = document.createElement('div');
        websiteImgContainer.className = 'website-img-container';

        const websiteImg = document.createElement('img');
        Component.setAttributes({
            'class': 'website-img',
            'src': this.props.websiteImg,
            'alt': this.props.imageAlt,
            'loading': 'lazy'
        }, websiteImg);

        const linksContainer = document.createElement('div');
        linksContainer.className = 'project-links-container';

        const websiteAnchor = document.createElement('a');
        Component.setAttributes({
            'class': 'website-anchor',
            'href': this.props.websiteLink,
            'target': '_blank'
        }, websiteAnchor);

        const websiteLinkIcon = document.createElement('img');
        Component.setAttributes({
            'class': 'project-link-icon',
            'src': 'src/assets/icons/website-link-icon.svg',
            'alt': 'Visit the website.'
        }, websiteLinkIcon);

        const githubAnchor = document.createElement('a');
        Component.setAttributes({
            'class': 'github-anchor',
            'href': this.props.githubLink,
            'target': '_blank'
        }, githubAnchor);

        const githubIcon = document.createElement('img');
        Component.setAttributes({
            'class': 'project-link-icon',
            'src': 'src/assets/icons/github-icon.svg',
            'alt': 'Visit the Github page.'
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