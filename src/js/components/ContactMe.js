import Component from '../Component.js';
import RedButton from './RedButton.js';

export default class ContactMe extends Component {
    constructor(props, root) {
        super(props, root);
        this.render();
    }

    render() {
        const contactMeContainer = document.createElement('section');
        contactMeContainer.id = 'contact';
        contactMeContainer.className = 'contact-me-container container section';

        const title = document.createElement('h2');
        title.className = 'section-header';
        title.textContent = 'Contact Me';
        
        const callToAction = document.createElement('p');
        callToAction.className = 'call-to-action grey-text';
        callToAction.textContent = `Want to work on a project with me? Contact me below and I'll get back to you as soon as possible.`;

        this.root.appendChild(contactMeContainer);
        contactMeContainer.appendChild(title);
        contactMeContainer.appendChild(callToAction);

        const email = 'justin@jgpixel.com';
        
        new RedButton({
            text: email,
            icon: 'src/assets/icons/email-icon.svg',
            callback: () => {
                location.href = `mailto:${email}&subject=Business Inquiry`;
            }
        }, contactMeContainer);
    }
}