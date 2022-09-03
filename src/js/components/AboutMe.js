import Component from '../Component.js';

export default class AboutMe extends Component {
    constructor(props, root) {
        super(props, root);

        this.#render();
    }

    #render() {
        const background = document.createElement('div');
        background.className = 'dark-bg';

        const section = document.createElement('section');
        section.classList.add('container', 'center', 'fade-in');

        const aboutMeContent = document.createElement('div');
        aboutMeContent.id = 'about';
        aboutMeContent.classList.add('about-me-content', 'section');

        const header = document.createElement('h2');
        header.className = 'section-header';
        header.textContent = 'About Me';

        const profilePicture = document.createElement('img');
        Component.setAttributes({
            class: 'profile-picture',
            src: 'src/assets/images/pfp.jpg',
            alt: 'A picture of me!',
            draggable: false
        }, profilePicture);

        const aboutMeParagraphs = document.createElement('div');
        aboutMeParagraphs.className = 'about-me-paragraphs';

        this.root.appendChild(background);
        background.appendChild(section);
        section.appendChild(aboutMeContent);
        aboutMeContent.appendChild(header);
        aboutMeContent.appendChild(profilePicture);
        aboutMeContent.appendChild(aboutMeParagraphs);

        this.props.paragraphs.forEach(paragraph => {
            new Paragraph({
                text: paragraph
            }, aboutMeParagraphs);
        });

        const seeMyWorkBtn = document.createElement('button');
        seeMyWorkBtn.className = 'see-my-work-btn';

        const seeMyWorkText = document.createElement('span');
        seeMyWorkText.className = 'see-my-work-text';
        seeMyWorkText.textContent = 'See My Work';

        const doubleDownArrow = document.createElement('img');
        Component.setAttributes({
            class: 'double-down-arrow',
            src: 'src/assets/icons/double-down-arrow.png',
            alt: 'Down arrow.'
        }, doubleDownArrow);

        aboutMeParagraphs.appendChild(seeMyWorkBtn);
        seeMyWorkBtn.appendChild(seeMyWorkText);
        seeMyWorkBtn.appendChild(doubleDownArrow);

        seeMyWorkBtn.addEventListener('click', () => {
            const { left, top } = Component.getElementOffset(document.getElementById('work'));
            window.scrollTo(left, top);
        });
    }
}

class Paragraph extends Component {
    constructor(props, root) {
        super(props, root)

        this.#render();
    }

    #render() {
        const p = document.createElement('p');
        p.className = 'about-me-p';
        p.textContent = this.props.text;

        this.root.appendChild(p);
    }
}

// TODO: set min heights on sections