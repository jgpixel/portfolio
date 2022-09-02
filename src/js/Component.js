export default class Component {
    setAttributes(attributes, element) {
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }

    getElementOffset(element) {
        const rect = element.getBoundingClientRect();
        
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    }
}