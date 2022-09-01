export default class Component {
    setAttributes(attributes, element) {
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
}