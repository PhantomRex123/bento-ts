/* eslint-disable no-restricted-syntax */
// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
/* global CONFIG */

// Print the first List
const printFirstList = () => {
  const icon = `<i class="list__head" icon-name="${CONFIG.firstListIcon}"></i>`;
  const position = "beforeend";
  let list1: any;
  list1.insertAdjacentHTML(position, icon);

  for (const link of CONFIG.lists.firstList) {
    // List item
    const item = `
        <a
        target="${CONFIG.openInNewTab ? "_blank" : ""}"
        href="${link.link}"
        class="list__link"
        >${link.name}</a
        >
    `;
    list1.insertAdjacentHTML(position, item);
  }
};

// Print the second List
const printSecondList = () => {
  const icon = `<i class="list__head" icon-name="${CONFIG.secondListIcon}"></i>`;
  const position = "beforeend";
  let list2: any;
  list2.insertAdjacentHTML(position, icon);
  for (const link of CONFIG.lists.secondList) {
    // List item
    const item = `
          <a
          target="${CONFIG.openInNewTab ? "_blank" : ""}"
          href="${link.link}"
          class="list__link"
          >${link.name}</a
          >
      `;
    list2.insertAdjacentHTML(position, item);
  }
};

printFirstList();
printSecondList();
