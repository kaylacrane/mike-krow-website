'use strict';

const header = document.querySelector('.header');
const headerLinks = header.querySelectorAll('span');
const headerImage = header.querySelector('img');
const page = document.querySelector('.page');
const pageSections = document.querySelectorAll('.page-sections ');

function sizeHeader(event) {
  page.classList.toggle('size-header');
  const id = event.currentTarget.dataset.id;

  if (id) {
    pageSections.forEach(section =>
      section.classList.remove('visible-section')
    );
    const visibleSection = [].find.call( pageSections, section => section.dataset.id === id);
    visibleSection.classList.add('visible-section');
  }
}

headerImage.addEventListener('click', sizeHeader);
headerLinks.forEach((link) => link.addEventListener('click', sizeHeader));
