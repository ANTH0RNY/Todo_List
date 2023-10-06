import { createSetElement } from "../util";
import createForm from "./form";
import manageProjects from "../stores/projects";
import all from "../img/icons/all.png";
import important from "../img/icons/important.png";
import today from "../img/icons/today.png";
import week from "../img/icons/week.png";

import "../sass/menu.scss";

function createMenu() {
  console.log(manageProjects().getProjectNames());
  const projectManager = manageProjects();
  const wrapper = createSetElement("div", {
    class: "menu",
  });
  const home = createSetElement("div", {
    class: "home",
  });

  const homeItems = [
    { name: "All", img: all },
    { name: "Today", img: today },
    { name: "Week", img: week },
    { name: "Importance", img: important },
  ];
  homeItems.forEach((val, index) => {
    const item = createSetElement("div", {
      class: `home-item ${val.name}`,
      id: `home-${index}`,
    });
    item.innerHTML = `<img src=${val.img} alt=${val.name} /> <span>${val.name}</span>`;
    home.appendChild(item);
  });

  const myProjects = createSetElement("div", {
    class: "my-project",
  });

  const head2 = createSetElement("div", {
    class: "menu-title",
  });
  head2.innerText = "Projects";

  myProjects.appendChild(head2);

  // function updateProjects() {
    const myProject = projectManager.getProjects();
    myProject.forEach((val, index) => {
      const projectItem = createSetElement("div", {
        class: "project-item",
        id:`project-item-${index}`,
        'data-projectId':index
      });
      projectItem.innerText = val.name;
      myProjects.appendChild(projectItem);
    });
  // }
  // updateProjects();

  const form = createForm();
  myProjects.appendChild(form);
  wrapper.appendChild(home);
  wrapper.appendChild(myProjects);
  return wrapper;
}

export default createMenu;
