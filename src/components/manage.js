import { project } from '../app/class';
import manageProjects from '../stores/projects';
// manageProjects
// import { getElement } from "../util";
// project

// getElement
function removeClass (e) {
  const items = document.querySelectorAll('.item');
  items.forEach((val) => {
    val.classList.remove('active');
  });
  e.target.classList.add('active');
}

function All () {
  const pM = manageProjects();
  const proj = new project('All');
  proj.files = [...pM.all()];
  // console.log(proj);
  return proj;
}

function Today () {
  const now = new Date().toLocaleDateString();
  const all = All().files;
  // console.log(now);
  const Today = all.filter((val) => {
    // console.log(val.dueDate);
    return val.dueDate == now;
  });
  // console.log(Today);
  const newProj = new project('Today');
  newProj.files = [...Today];
  // console.log(newProj);
  return newProj;
}
function Important () {
  const all = All().files;

  const imp = all.filter((val) => {
    return val.priority === 'important';
  });
  const proj = new project('Important');
  proj.files = [...imp];
  return proj;
}
function Week () {
  const all = All().files;

  const week = all.filter((val) => {
    const date = val.dueDate.split('/');
    console.log(date);
  });
}

export { removeClass, All, Today, Important, Week };
