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
        this.render();
    }

    render() {
        new WebsiteLoader({
            animationDuration: 5500
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
                'Hi! My name is Justin. I am a passionate web developer and UX/UI designer.',
                'I work with HTML, CSS, JavaScript, React.JS, Next.js, Tailwind CSS, GraphQL, Contentful CMS, Graph CMS, Figma, Adobe Photoshop, VS Code, and Final Cut Pro X.',
                'Let\'s work together!'
            ]
        }, this.root);

        new MyWork({
            projects: [
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
            ]
        }, this.root);

        new WorkExperience({
            jobs: [
                {
                    positionTitle: 'Freelance Web Development',
                    companyName: 'JG Pixel',
                    companyWebsite: 'https://jgpixel.com/',
                    workStartDate: 'December 2020',
                    workEndDate: 'Present',
                    jobResponsibilities: [
                        'Design and code websites for businesses'
                    ]
                },
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