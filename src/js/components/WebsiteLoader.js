import Component from '../Component.js';

export default class WebsiteLoader extends Component {
    constructor(props, root) {
        super(props, root);

        this.#render();
    }

    #render() {
        document.body.className = 'no-scroll';

        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        const overlayContent = document.createElement('div');
        overlayContent.className = 'overlay-content';

        const j = document.createElement('span');
        j.className = 'j';
        j.textContent = 'J';

        const g = document.createElement('span');
        g.className = 'g';
        g.textContent = 'G';

        const dot = document.createElement('span');
        dot.className = 'dot accent-text';
        dot.textContent = '.';

        this.root.appendChild(overlay);
        overlay.appendChild(overlayContent);
        overlayContent.appendChild(j);
        overlayContent.appendChild(g);
        overlayContent.appendChild(dot);

        setTimeout(() => {
            overlay.classList.add('fade-out-overlay');
            document.body.classList.remove('no-scroll');

            setTimeout(() => {
                overlay.remove();
            }, 410);
        }, this.props.animationDuration);
    }
}