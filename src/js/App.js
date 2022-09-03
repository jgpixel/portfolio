import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import AboutMe from './components/AboutMe.js';
import MyWork from './components/MyWork.js';
import WorkExperience from './components/WorkExperience.js';
import Component from './Component.js';

export default class App extends Component {
    constructor(root) {
        super();

        this.root = root;

        this.#render()
    }

    #render() {
        new Navbar({
            links: [
                {
                    text: 'About',
                    href: 'about'
                },
                {
                    text: 'Work',
                    href: 'work'
                },
                {
                    text: 'Experience',
                    href: 'experience'
                },
                {
                    text: 'Contact',
                    href: 'contact'
                },
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

        new WorkExperience({}, this.root);
    }
}