export function createHTMLElement(tagName: keyof HTMLElementTagNameMap, className: string, inner = ''): HTMLElement {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = inner;
    return element;
}
