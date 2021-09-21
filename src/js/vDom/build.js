function buildElement(element, domElement) {
       domElement.replaceWith(element);
       return element;
};
export default buildElement;