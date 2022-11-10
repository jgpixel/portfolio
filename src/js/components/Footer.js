import Component from '../Component.js';

export default class Footer extends Component {
    constructor(props, root) {
        super(props, root);
        this.render();
    }

    render() {
        const footer = document.createElement('footer');
        footer.className = 'footer';

        const copyrightContainer = document.createElement('span');
        copyrightContainer.className = 'copyright-container';

        const copyright = document.createElement('a');
        copyright.className = 'copyright';
        copyright.href = 'https://jgpixel.com';
        copyright.textContent = `© JG Pixel, ${new Date().getFullYear()}`;

        const credit = document.createElement('a');
        Component.setAttributes({
            'class': 'credit-anchor',
            'href': this.props.projectLink,
            'target': '_blank'
        }, credit);
        credit.textContent = 'Designed and developed by Justin Gorelik'

        const socials = document.createElement('div');
        socials.className = 'socials'

        this.props.socials.forEach(social => {
            const socialLink = document.createElement('a');
            Component.setAttributes({
                'href': social.href,
                'target': '_blank'
            }, socialLink);

            const socialIcon = document.createElement('img');
            Component.setAttributes({
                'class': 'social-icon',
                'src': social.icon,
                'alt': social.alt
            }, socialIcon);

            socials.appendChild(socialLink);
            socialLink.appendChild(socialIcon);
        });

        this.root.appendChild(footer);
        footer.appendChild(copyrightContainer);
        copyrightContainer.appendChild(copyright);
        footer.appendChild(credit);
        footer.appendChild(socials);
    }
}