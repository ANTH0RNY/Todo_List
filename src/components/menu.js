import { createSetElement, getElement, createFullElement, appendChildren } from '../util';
import createForm from './form';
import manageProjects from '../stores/projects';

import all from '../img/icons/all.png';
import important from '../img/icons/important.png';
import today from '../img/icons/today.png';
import week from '../img/icons/week.png';
import createAddForm from './addBtn';

import '../sass/menu.scss';
import projectDisplay from './projectsDisplay';
import { removeClass, All, Today, Important } from './manage';

function createMenu () {
  const projectManager = manageProjects();
  const wrapper = createSetElement('div', {
    class: 'menu'
  });
  const home = createSetElement('div', {
    class: 'home'
  });

  const homeItems = [
    {
      name: 'All',
      img: all,
      func: () => {
        const proj = All();
        const mainBody = getElement('.project-area');
        mainBody.innerHTML = '';
        projectDisplay(proj, mainBody);
      }
    },
    {
      name: 'Today',
      img: today,
      func: () => {
        const proj = Today();
        const mainBody = getElement('.project-area');
        mainBody.innerHTML = '';
        projectDisplay(proj, mainBody);
      }
    },
    { name: 'Week', img: week },
    {
      name: 'Importance',
      img: important,
      func: () => {
        const proj = Important();
        const mainBody = getElement('.project-area');
        mainBody.innerHTML = '';
        projectDisplay(proj, mainBody);
      }
    }
  ];
  homeItems.forEach((val, index) => {
    const item = createSetElement('div', {
      class: `home-item ${val.name} item`,
      id: `home-${index}`
    });
    item.addEventListener('click', (e) => {
      removeClass(e);
      if (val.func) {
        val.func();
      }
    });
    const img = createSetElement('img', {
      src: val.img,
      alt: val.name
    });
    const span = createFullElement('span', {}, val.name);
    appendChildren(item, [img, span]);
    // item.innerHTML = `<img src=${val.img} alt=${val.name} /> <span>${val.name}</span>`;
    home.appendChild(item);
  });

  const myProjects = createSetElement('div', {
    class: 'my-project'
  });

  const head2 = createSetElement('div', {
    class: 'menu-title'
  });
  head2.innerText = 'Projects';

  myProjects.appendChild(head2);

  const myProject = projectManager.getProjects();
  myProject.forEach((val, index) => {
    const projectItem = createSetElement('div', {
      class: 'project-item item',
      id: `project-item-${index}`,
      'data-projectId': index
    });
    projectItem.innerText = val.name;
    projectItem.addEventListener('click', (e) => {
      const mainBody = getElement('.project-area');
      mainBody.innerHTML = '';
      const forProject = projectManager.getProjectByName(val.name);
      projectDisplay(forProject, mainBody);
      removeClass(e);
    });
    myProjects.appendChild(projectItem);
  });

  const form = createForm();
  form.classList.toggle('not-visible');
  const addbtn = createAddForm(form);
  myProjects.appendChild(addbtn);
  myProjects.appendChild(form);
  wrapper.appendChild(home);
  wrapper.appendChild(myProjects);
  return wrapper;
}

export default createMenu;
