export default class Navbar {
    constructor(props, root) {
        this.props = props;
        this.root = root;

        this.#render();
    }

    #render() {
        const nav = document.createElement('nav');
        nav.className = 'main-nav';

        const logo = document.createElement('h4');
        logo.textContent = 'JG';

        const dot = document.createElement('span');
        dot.className = 'accent-text';
        dot.textContent = '.';

        const linksContainer = document.createElement('div');
        linksContainer.className = 'links-container';

        this.props.links.forEach(link => {
            new NavLink(link, linksContainer);
        });

        this.root.appendChild(nav);
        nav.appendChild(logo);
        logo.appendChild(dot);
        nav.appendChild(linksContainer);
        new HamburgerMenu({
            nav: linksContainer
        }, nav);

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

class NavLink {
    constructor(props, root) {
        this.props = props;
        this.root = root;

        this.#render();
    }

    #render() {
        const a = document.createElement('a');
        a.className = 'nav-link';
        a.textContent = this.props.text;
        a.setAttribute('href', `#${this.props.href}`);

        this.root.appendChild(a);
    }
}

class HamburgerMenu {
    menuOpen = false;

    constructor(props, root) {
        this.props = props;
        this.root = root;

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
        closeIcon.classList.add('close-icon', 'hide');
        closeIcon.setAttribute('src', 'src/assets/icons/close-icon.svg');

        this.root.appendChild(navMenuButton);
        navMenuButton.appendChild(hamburgerIcon);
        navMenuButton.appendChild(closeIcon);

        navMenuButton.addEventListener('click', () => {
            if (!this.menuOpen) {
                hamburgerIcon.classList.add('hide');
                closeIcon.classList.add('flex');
                closeIcon.classList.remove('hide');

                this.props.nav.classList.add('flex');
                this.props.nav.classList.remove('hide');
            } else {
                hamburgerIcon.classList.add('block');
                hamburgerIcon.classList.remove('hide');
                closeIcon.classList.add('hide');

                this.props.nav.classList.add('hide');
                this.props.nav.classList.remove('flex');
            }
            this.menuOpen = !this.menuOpen;
        });
    }
}