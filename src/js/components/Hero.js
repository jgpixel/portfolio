import Component from '../Component.js';
import RedButton from './RedButton.js';

export default class Hero extends Component{
    constructor(props, root) {
        super(props, root)
        this.#render();
    }

    #render() {
        const container = document.createElement('div');
        container.className = 'container';

        const main = document.createElement('main');

        const heroContent = document.createElement('div');
        heroContent.className = 'hero-content';

        const myNameIs = document.createElement('p');
        myNameIs.className = 'my-name-is accent-text';
        myNameIs.textContent = 'Hi, my name is'

        const name = document.createElement('h1');
        name.textContent = 'Justin Gorelik';

        const description = document.createElement('p');
        description.className = 'hero-description grey-text';
        description.textContent = this.props.description;

        this.root.appendChild(container);
        container.appendChild(main);
        main.appendChild(heroContent);
        heroContent.appendChild(myNameIs);
        heroContent.appendChild(name);
        
        new TextAnimation({
            words: ['web developer', 'UX/UI designer', 'programmer', 'creative']
        }, heroContent);

        heroContent.appendChild(description);

        new RedButton({
            text: 'See My Resume',
            callback: () => {
                window.open('../src/assets/justin-gorelik-resume.pdf', '_blank');
            }
        }, heroContent);
    }
}

class TextAnimation extends Component {
    constructor(props, root) {
        super(props, root);

        this.#render();
    }

    #render() {
        const h2 = document.createElement('h2');
        h2.textContent = 'I am a ';

        const dot = document.createElement('span');
        dot.textContent = '.';

        const animatedWord = document.createElement('span');
        animatedWord.className = 'animated-word';

        const caret = document.createElement('span');
        caret.className = 'hero-caret';
        caret.textContent = '|';

        this.root.appendChild(h2);
        h2.appendChild(animatedWord);
        h2.appendChild(caret);
        h2.appendChild(dot);

        this.#animate(animatedWord, caret);
    }

    #animate(animatedWord, caret) {
        const titleWords = this.props.words;

        const BEFORE_DELETE_DELAY = 1350;
        const NEW_WORD_DELAY = 5500;
        const CHAR_SPEED = 100;

        let caretIndex = 0;
        let wordIndex = 0;
        let timer = NEW_WORD_DELAY;

        function changeWord() {
            for (let i = 0; i <= titleWords[wordIndex].length * CHAR_SPEED; i += CHAR_SPEED) {
                setTimeout(() => {
                    caret.classList.add("caret-pause");
                    animatedWord.textContent = titleWords[wordIndex].substring(0, caretIndex);

                    if (i === titleWords[wordIndex].length * CHAR_SPEED) {
                        caret.classList.remove("caret-pause");
                    }

                    caretIndex++;
                }, i);
            }

            setTimeout(() => {
                caret.classList.add("caret-pause");
                caretIndex = titleWords[wordIndex].length;
                for (let i = 0; i <= titleWords[wordIndex].length * CHAR_SPEED; i += CHAR_SPEED) {
                    setTimeout(() => {
                        animatedWord.textContent = titleWords[wordIndex].substring(0, caretIndex - 1);
                        if (i === titleWords[wordIndex].length * CHAR_SPEED) {
                            setTimeout(() => {
                                caret.classList.remove("caret-pause");
                            }, 15);
                        }
                        caretIndex--;
                    }, i);
                }
            }, titleWords[wordIndex].length * CHAR_SPEED + BEFORE_DELETE_DELAY);
        }

        const LOOP_COUNT = 100;
        let firstTimeRunningAnimation = true;

        function activateTypeAnimation() {
            if (firstTimeRunningAnimation) {
                changeWord();
                firstTimeRunningAnimation = false;
            }

            for (let i = 0; i < LOOP_COUNT; i++) {
                setTimeout(() => {
                    wordIndex = wordIndex === titleWords.length - 1 ? 0 : wordIndex + 1;
                    caretIndex = 0;
                    changeWord();
                    if (i === LOOP_COUNT - 1) {
                        timer = NEW_WORD_DELAY;
                        activateTypeAnimation();
                    }
                }, timer);
                timer += NEW_WORD_DELAY;
            }
        }

        setTimeout(activateTypeAnimation, 1000);
    }
}