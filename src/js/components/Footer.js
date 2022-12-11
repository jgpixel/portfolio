import Component from '../Component.js';

const socialMediaLinks = [
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
];

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
            'href': 'https://github.com/jgpixel/portfolio',
            'target': '_blank'
        }, credit);
        credit.textContent = 'Designed and developed by Justin Gorelik'

        const socials = document.createElement('div');
        socials.className = 'socials'

        socialMediaLinks.forEach(social => {
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