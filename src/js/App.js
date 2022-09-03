import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import AboutMe from './components/AboutMe.js';
import MyWork from './components/MyWork.js';
import WorkExperience from './components/WorkExperience.js';
import Component from './Component.js';
import ContactMe from './components/ContactMe.js';
import Footer from './components/Footer.js';
import WebsiteLoader from './components/WebsiteLoader.js';

export default class App extends Component {
    constructor(props, root) {
        super(props, root);

        this.#render()
    }

    #render() {
        new WebsiteLoader({
            animationDuration: 3000
        }, this.root);

        new Navbar({
            links: [
                {
                    text: 'About',
                    href: 'about'
                },
                {
                    text: 'My Work',
                    href: 'work'
                },
                {
                    text: 'Experience',
                    href: 'experience'
                },
                {
                    text: 'Contact',
                    href: 'contact'
                }
            ]
        }, this.root);

        new Hero({
            description: `Design is a passion of mine. Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.`
        }, this.root);

        new AboutMe({
            paragraphs: [
                'Design is a passion of mine. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'I work with HTML, CSS, JavaScript, Figma, Adobe Photoshop, VS Code, and Final Cut Pro X.',
                'Some more very, very, generic text about me.'
            ]
        }, this.root);

        new MyWork({
            projects: [
                {
                    title: 'Title',
                    websiteLink: 'https://apple.com',
                    githubLink: 'https://github.com',
                    imageName: 'baen',
                    imageAlt: 'baenbaen',
                    description: 'lorem ipsum dolor sit amet',
                    technologiesUsed: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'DEEZ.js'
                    ]
                },
                {
                    title: 'Title',
                    websiteLink: 'https://apple.com',
                    githubLink: 'https://github.com',
                    imageName: 'baen',
                    imageAlt: 'baenbaen',
                    description: 'lorem ipsum dolor sit amet',
                    technologiesUsed: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'DEEZ.js'
                    ]
                },
                {
                    title: 'Title',
                    websiteLink: 'https://apple.com',
                    githubLink: 'https://github.com',
                    imageName: 'baen',
                    imageAlt: 'baenbaen',
                    description: 'lorem ipsum dolor sit amet',
                    technologiesUsed: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'DEEZ.js'
                    ]
                },
                {
                    title: 'Title',
                    websiteLink: 'https://apple.com',
                    githubLink: 'https://github.com',
                    imageName: 'baen',
                    imageAlt: 'baenbaen',
                    description: 'lorem ipsum dolor sit amet',
                    technologiesUsed: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'DEEZ.js'
                    ]
                },
                {
                    title: 'Title',
                    websiteLink: 'https://apple.com',
                    githubLink: 'https://github.com',
                    imageName: 'baen',
                    imageAlt: 'baenbaen',
                    description: 'lorem ipsum dolor sit amet',
                    technologiesUsed: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'DEEZ.js'
                    ]
                },
                {
                    title: 'Title',
                    websiteLink: 'https://apple.com',
                    githubLink: 'https://github.com',
                    imageName: 'baen',
                    imageAlt: 'baenbaen',
                    description: 'lorem ipsum dolor sit amet',
                    technologiesUsed: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'DEEZ.js'
                    ]
                }
            ]
        }, this.root);

        new WorkExperience({
            jobs: [
                {
                    positionTitle: "UX/UI Designer",
                    companyName: "TitanFlow",
                    companyWebsite: "https://titanflow.io/",
                    workStartDate: "June 2020",
                    workEndDate: "Present",
                    jobResponsibilities: [
                        "Assisted in the design of intuitive, simple, and engaging in-app components/features.",
                        "Designer for branding and social media related graphics and animations."
                    ]
                },
                {
                    positionTitle: "Web Design Intern",
                    companyName: "GoreMediaSolutions",
                    companyWebsite: "http://goremediasolutions.com/",
                    workStartDate: "December 2019",
                    workEndDate: "April 2020",
                    jobResponsibilities: [
                        "Assisted in the designing of websites for the clients of GoreMediaSolutions.",
                        "Created the layout for an internal catalog of inventory."
                    ]
                },
                {
                    positionTitle: "Snapchat Lens Developer",
                    companyName: "Legre Eyewear",
                    companyWebsite: "https://legre.com/",
                    workStartDate: "October 2018",
                    workEndDate: "January 2020",
                    jobResponsibilities: [
                        "Created interactive Snapchat lenses that allowed users to try on multiple styles of the brand's glasses."
                    ]
                }
            ]
        }, this.root);

        new ContactMe({
            email: 'justin@jgpixel.com'
        }, this.root);

        new Footer({
            socials: [
                {
                    icon: 'src/assets/icons/github-icon.svg',
                    alt: 'Github icon.',
                    href: 'https://github.com/jgorelik23'
                },
                {
                    icon: 'src/assets/icons/twitter-icon.svg',
                    alt: 'Twitter icon.',
                    href: 'https://twitter.com/jg_pixel'
                },
                {
                    icon: 'src/assets/icons/stack-overflow-icon.svg',
                    alt: 'Stack Overflow icon.',
                    href: 'https://stackoverflow.com/users/18584468/jgpixel'
                }
            ],
            projectLink: 'https://github.com/jgorelik23/portfolio' // TODO: edit link
        }, this.root);
    }
}

/* 

TODO:
- convert all images to .webp format
- change github username to jgpixel

*/