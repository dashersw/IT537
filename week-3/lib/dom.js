var tempDiv = document.createElement('div');

/**
 * Returns an element given a template with one root element
 *
 * @param {string} template HTML template with one root element
 * @return {HTMLElement}
 */
var createElement = function(template) {
    tempDiv.innerHTML = template;
    return tempDiv.removeChild(tempDiv.firstChild);
}

/**
 * Returns the first element matching the given CSS selector
 *
 * @param {string} selector CSS selector
 * @return {?Element}
 */
var $ = selector => document.querySelector(selector);

/**
 * Returns the first element matching the given CSS selector
 *
 * @param {string} selector CSS selector
 * @return {?Element}
 */
HTMLElement.prototype.$ = function(selector) {
    return this.querySelector(selector);
};

/**
 * Returns an array of elements matching the given CSS selector
 *
 * @param {string} selector CSS selector
 * @return {Array.<?Element>}
 */
var $$ = selector => [...document.querySelectorAll(selector)];

/**
 * Returns an array of elements matching the given CSS selector
 *
 * @param {string} selector CSS selector
 * @return {Array.<?Element>}
 */
HTMLElement.prototype.$$ = function(selector) {
    return [...this.querySelectorAll(selector)]
};

export default {
    createElement,
    $,
    $$
}
