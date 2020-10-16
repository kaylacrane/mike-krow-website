"use strict";
const projects = [
  {
    name: "My project",
    description: "I made a thing! It's the coolest thing.",
    image: "https://placekitten.com/200/300",
    url: "http://www.spaceasylum.co/",
  },
  {
    name: "A Video",
    description:
      "It could be cool. It looks like it might have coolness potential. I guess.",
    image: "https://placekitten.com/300/300",
    url: "http://www.spaceasylum.co/",
  },
  {
    name: "A Blog Post",
    description:
      "I wrote about my feelings and stuff because I'm deep and I know you care. You do care, don't you?!",
    image: "https://placekitten.com/400/300",
    url: "http://www.spaceasylum.co/",
  },
];
const projectsSection = document.querySelector(".projects-list");

for (const project of projects) {
  const { name, description, image, url } = project;
  const projectHTML = `
    <article class="project-card">
      <a href="${url}" target="_blank"><h3 class="project-title">${name}</h3></a>
      <div class="image-container" style="background-image: url(${image})">
       
      </div>
      <p>${description}</p>
    </article >
        `;
  projectsSection.innerHTML += projectHTML;
}
