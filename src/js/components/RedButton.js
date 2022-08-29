export default class RedButton {
    constructor(props, root) {
        this.props = props;
        this.root = root;
        
        this.#render();
    }

    #render() {
        const button = document.createElement('button');
        button.className = 'red-button';
        button.textContent = this.props.text;
        
        button.addEventListener('click', this.props.callback);

        this.root.appendChild(button);
    }
}