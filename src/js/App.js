import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
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

        new Navbar({}, this.root);

        new Hero({}, this.root);

        new AboutMe({}, this.root);

        new Projects({}, this.root);

        new WorkExperience({}, this.root);

        new ContactMe({}, this.root);

        new Footer({}, this.root);
    }
}

/* 

TODO:

- update focus state on links

*/