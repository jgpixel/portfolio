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
            animationDuration: 6500
        }, this.root);

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
                }
            ]
        }, this.root);

        new Hero({
            description: 'Hey there! I am a passionate front-end developer and UX/UI designer. I am a problem solver, and pay extreme attention to detail in my designs. Let\'s work together.'
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
                    title: 'Wordle Clone',
                    websiteLink: 'https://justinswordle.netlify.app',
                    githubLink: 'https://github.com/jgpixel/WordleClone',
                    websiteImg: 'src/assets/images/my-work-imgs/wordle.webp',
                    imageAlt: 'Wordle Clone.',
                    description: 'A clone of the hit game \'Wordle\'.',
                    technologiesUsed: [
                        'HTML',
                        'CSS',
                        'JavaScript'
                    ]
                },
                {
                    title: 'NFT+',
                    websiteLink: 'https://www.figma.com/proto/oOS4radHzRBZOTIvvzbDyi/NFT%2B?node-id=0%3A1141&scaling=contain&page-id=0%3A1&starting-point-node-id=0%3A1141',
                    websiteImg: 'src/assets/images/my-work-imgs/nft+.webp',
                    imageAlt: 'NFT+ frames.',
                    description: 'Design mockup for a concept NFT trading platform. Click the link to see clickable prototype!',
                    technologiesUsed: [
                        'Figma',
                        'Prototyping'
                    ]
                },
                {
                    title: 'TitanFlow',
                    websiteLink: 'https://www.titanflow.io',
                    websiteImg: 'src/assets/images/my-work-imgs/titanflow.webp',
                    imageAlt: 'TitanFlow landing page.',
                    description: 'Website for stock options flow service.',
                    technologiesUsed: [
                        'Webflow'
                    ]
                },
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
                        'JavaScript'
                    ]
                }
            ]
        }, this.root);

        new WorkExperience({
            jobs: [
                {
                    positionTitle: 'UX/UI Designer',
                    companyName: 'TitanFlow',
                    companyWebsite: 'https://titanflow.io/',
                    workStartDate: 'June 2020',
                    workEndDate: 'Present',
                    jobResponsibilities: [
                        'Assisted in the design of intuitive, simple, and engaging in-app components/features.',
                        'Designer for branding and social media related graphics and animations.'
                    ]
                },
                {
                    positionTitle: 'Web Design Intern',
                    companyName: 'GoreMediaSolutions',
                    companyWebsite: 'http://goremediasolutions.com/',
                    workStartDate: 'December 2019',
                    workEndDate: 'April 2020',
                    jobResponsibilities: [
                        'Assisted in the designing of websites for the clients of GoreMediaSolutions.',
                        'Created the layout for an internal catalog of inventory.'
                    ]
                },
                {
                    positionTitle: 'Snapchat Lens Developer',
                    companyName: 'Legre Eyewear',
                    companyWebsite: 'https://legre.com/',
                    workStartDate: 'October 2018',
                    workEndDate: 'January 2020',
                    jobResponsibilities: [
                        'Created interactive Snapchat lenses that allowed users to try on multiple styles of the brand\'s glasses.'
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
                    href: 'https://github.com/jgpixel'
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
            projectLink: 'https://github.com/jgpixel/portfolio'
        }, this.root);
    }
}

/* 

TODO:

- update focus state on links

*/