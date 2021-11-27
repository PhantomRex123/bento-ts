"use strict";
// ┌─┐┌─┐┬─┐┌┬┐┌─┐
// │  ├─┤├┬┘ ││└─┐
// └─┘┴ ┴┴└──┴┘└─┘
/* global CONFIG */
// Print cards
const printCards = () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const card of CONFIG.cards) {
        // Card Item
        const item = `
        <a
          href="${card.link}"
          target="${CONFIG.openInNewTab ? "_blank" : ""}"
          class="buttons__link  card buttonLink__link-${card.id}"
        >
          <i class="buttonLink__icon" icon-name="${card.icon}"></i>
        </a>
    `;
        const position = "beforeend";
        // eslint-disable-next-line no-undef
        buttonsContainer.insertAdjacentHTML(position, item);
    }
};
printCards();
