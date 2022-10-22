import Component from '../Component.js';
import RedButton from '../components/RedButton.js';

export default class ErrorPage extends Component{
    constructor(props, root) {
        super(props, root);
        this.render();
    }

    render() {
        const wrapper = document.createElement('div');
        wrapper.className = 'center-xy';

        const container = document.createElement('div');
        container.className = 'error-div';

        const h1 = document.createElement('h1');
        h1.className = 'error-title';
        h1.textContent = '404';
        
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Page not found.';

        this.root.appendChild(wrapper);
        wrapper.appendChild(container);
        container.appendChild(errorMessage);
        container.appendChild(h1);

        new RedButton({
            text: 'Go home',
            callback: () => {
                window.location.href = 'https://jgpixel.com'
            }
        }, container);
    }
}