import Component from '../Component.js';

export default class RedButton extends Component {
    constructor(props, root) {
        super(props, root);
        this.render();
    }

    render() {
        const button = document.createElement('button');
        button.className = 'red-button';

        if (this.props.icon) {
            const icon = document.createElement('img');
            Component.setAttributes({
                'class': 'button-icon',
                'src': this.props.icon,
                'alt': 'this.props.iconAlt'
            }, icon)
            button.appendChild(icon);
        }

        const buttonText = document.createElement('span');
        buttonText.textContent = this.props.text;

        button.appendChild(buttonText);
        
        button.addEventListener('click', this.props.callback);

        this.root.appendChild(button);
    }
}