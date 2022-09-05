import Component from '../Component.js';

export default class Navbar extends Component {
    constructor(props, root) {
        super(props, root);
        this.#render();
    }

    #render() {
        const nav = document.createElement('nav');
        nav.className = 'main-nav';

        const logoAnchor = document.createElement('a');
        Component.setAttributes({
            'class': 'link',
            'href': 'https://jgpixel.com'
        }, logoAnchor);

        const logo = document.createElement('h4');
        logo.textContent = 'JG';

        const dot = document.createElement('span');
        dot.className = 'accent-text';
        dot.textContent = '.';

        const linksContainer = document.createElement('div');
        linksContainer.className = 'links-container';

        this.root.appendChild(nav);
        nav.appendChild(logoAnchor);
        logoAnchor.appendChild(logo);
        logo.appendChild(dot);
        nav.appendChild(linksContainer);

        const hamburgerMenu = new HamburgerMenu({
            nav: linksContainer
        }, nav);

        this.props.links.forEach(link => {
            new NavLink({
                ...link,
                hamburgerMenu: hamburgerMenu
            }, linksContainer);
        });

        let prevScrollPos = window.pageYOffset;

        window.addEventListener('scroll', () => {
            const currentScrollPos = window.pageYOffset;
            
            if (prevScrollPos > currentScrollPos) {
                nav.style.top = '0';
            } else if (currentScrollPos > window.innerHeight - 200) {
                nav.style.top = '-100px';
            }

            prevScrollPos = currentScrollPos;
        });
    }
}

class NavLink extends Component {
    constructor(props, root) {
        super(props, root);
        this.#render();
    }

    #render() {
        const a = document.createElement('a');
        a.textContent = this.props.text;
        Component.setAttributes({
            'class': 'nav-link link',
            'href': `#${this.props.href}`
        }, a);

        a.addEventListener('click', () => {
            document.querySelector('.hamburger-icon').classList.add('block');
            document.querySelector('.hamburger-icon').classList.remove('hide');
            document.querySelector('.close-icon').classList.add('hide');

            document.querySelector('.links-container').classList.add('hide');
            document.querySelector('.links-container').classList.remove('flex');

            this.props.hamburgerMenu.menuOpen = false;
        });

        this.root.appendChild(a);
    }
}

class HamburgerMenu extends Component {
    #menuOpen = false;

    constructor(props, root) {
        super(props, root);

        this.#render();
    }

    #render() {
        const navMenuButton = document.createElement('div');
        navMenuButton.className = 'nav-menu-button';

        const hamburgerIcon = document.createElement('div');
        hamburgerIcon.className = 'hamburger-icon';

        for (let i = 0; i < 3; i++) {
            const burgerBar = document.createElement('div');
            burgerBar.className = 'burger-bar';
            hamburgerIcon.appendChild(burgerBar);
        }

        const closeIcon = document.createElement('img');
        Component.setAttributes({
            'class': 'close-icon hide',
            'src': 'src/assets/icons/close-icon.svg',
            'draggable': false
        }, closeIcon);

        this.root.appendChild(navMenuButton);
        navMenuButton.appendChild(hamburgerIcon);
        navMenuButton.appendChild(closeIcon);

        navMenuButton.addEventListener('click', () => {
            if (this.#menuOpen) {
                hamburgerIcon.classList.add('block');
                hamburgerIcon.classList.remove('hide');
                closeIcon.classList.add('hide');

                this.props.nav.classList.add('hide');
                this.props.nav.classList.remove('flex');
            } else {
                hamburgerIcon.classList.add('hide');
                closeIcon.classList.add('flex');
                closeIcon.classList.remove('hide');

                this.props.nav.classList.add('flex');
                this.props.nav.classList.remove('hide');
            }
            
            this.#menuOpen = !this.#menuOpen;
        });
    }

    /**
     * @param {boolean} menuOpen
     */
    set menuOpen(menuOpen) {
        this.#menuOpen = menuOpen;
    }
}