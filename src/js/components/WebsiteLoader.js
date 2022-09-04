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

        const jgLogo = this.#createSVGLogo();

        this.root.appendChild(overlay);
        overlay.appendChild(overlayContent);
        overlayContent.appendChild(jgLogo);

        setTimeout(() => {
            overlay.classList.add('fade-out-overlay');
            document.body.classList.remove('no-scroll');

            setTimeout(() => {
                overlay.remove();
            }, 410);
        }, this.props.animationDuration);
    }

    #createSVGLogo() {
        const iconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        Component.setAttributes({
            width: 167,
            height: 73,
            viewBox: '0 0 167 73',
            fill: 'none'
        }, iconSVG);

        const letterPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        Component.setAttributes({
            class: 'jg',
            d: 'M1.86963 51.4062L14.9914 46.5371C16.3136 50.0457 18.032 52.8129 20.2098 54.7267C22.7214 56.9339 25.8559 58 29.5 58C33.6001 58 37.0432 56.6285 39.6897 53.8308C42.3327 51.0368 43.6 47.4105 43.6 43.1V2.6H57.8V43.6C57.8 49.0361 56.5873 53.7306 54.2102 57.7342L54.2058 57.7417L54.2014 57.7492C51.8783 61.7675 48.6188 64.9065 44.39 67.1787C40.1784 69.4416 35.1976 70.6 29.4 70.6C22.2609 70.6 16.3535 68.8365 11.5886 65.3915C7.20853 62.1181 3.95558 57.4855 1.86963 51.4062ZM121.82 44.1H104.42V32.2H138.92V35.7C138.92 40.7926 138.051 45.4669 136.329 49.7393L136.325 49.7502C134.661 53.9727 132.3 57.6722 129.238 60.8612L129.238 60.8617C126.253 63.9734 122.694 66.3912 118.545 68.1148C114.41 69.8322 109.875 70.7 104.92 70.7C99.8313 70.7 95.1235 69.8316 90.7823 68.1092C86.4218 66.3125 82.5846 63.849 79.2599 60.7186C76.0023 57.5223 73.4496 53.8524 71.5957 49.7013C69.816 45.5012 68.9203 40.9727 68.9203 36.1C68.9203 31.2241 69.8171 26.7293 71.5958 22.5983C73.4543 18.3703 75.9789 14.6988 79.1702 11.5713L79.1704 11.5711C82.4245 8.38083 86.2212 5.92237 90.5739 4.19412L90.5827 4.19063L90.5914 4.18702C94.9328 2.3994 99.6042 1.5 104.62 1.5C110.338 1.5 115.721 2.68692 120.784 5.0584L120.791 5.06171L120.798 5.06496C125.403 7.16338 129.214 9.99044 132.254 13.5424L122.384 22.4334C120.227 19.9485 117.762 18.014 114.985 16.6555C111.829 15.0787 108.366 14.3 104.62 14.3C101.628 14.3 98.8221 14.8705 96.2204 16.0251C93.7149 17.1003 91.4919 18.6071 89.5597 20.5393L89.5497 20.5493L89.5398 20.5595C87.6654 22.5061 86.1973 24.8042 85.1302 27.4364L85.1236 27.4527L85.1174 27.4692C84.1131 30.1234 83.6203 33.0056 83.6203 36.1C83.6203 39.2072 84.1507 42.1289 85.2251 44.8507L85.225 44.8508L85.2302 44.8636C86.3003 47.503 87.804 49.8329 89.7406 51.8412L89.7595 51.8608L89.7791 51.8798C91.7733 53.8028 94.0533 55.3339 96.6111 56.4707L96.6338 56.4808L96.6568 56.4901C99.3159 57.5681 102.175 58.1 105.22 58.1C108.123 58.1 110.791 57.6043 113.199 56.584C115.643 55.5765 117.751 54.163 119.502 52.3388C121.258 50.5105 122.514 48.4099 123.252 46.0474L123.861 44.1H121.82Z',
            stroke: 'white',
            'stroke-width': 3
        }, letterPath);

        const pixelPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        Component.setAttributes({
            class: 'pixel',
            d: 'M162.72 57.8412L162.739 57.8608L162.759 57.8798C164.34 59.4046 165.1 61.1847 165.1 63.3C165.1 65.4172 164.338 67.2408 162.739 68.8393C161.219 70.3596 159.433 71.1 157.3 71.1C155.174 71.1 153.351 70.3638 151.761 68.8391C150.236 67.2493 149.5 65.4261 149.5 63.3C149.5 61.1667 150.24 59.3809 151.761 57.8607C153.359 56.2621 155.183 55.5 157.3 55.5C159.415 55.5 161.195 56.2599 162.72 57.8412Z',
            stroke: '#FF656F',
            'stroke-width': 3
        }, pixelPath);

        iconSVG.appendChild(letterPath);
        iconSVG.appendChild(pixelPath);

        return iconSVG;
    }
}