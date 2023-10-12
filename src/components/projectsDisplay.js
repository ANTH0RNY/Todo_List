import { createSetElement, createFullElement } from '../util';
import toDoElement from './toDoElement';
import img1 from '../img/icons/plus.png';
import toDoForm from './toDoForm';
// toDoForm

function projectDisplay (project, wrapper = null) {
  const display = createSetElement('div', {
    class: 'project-display',
    'data-project': project.name
  });
  const titleArea = createSetElement('div', { class: 'title-area' });
  const name = createFullElement('div', { class: 'project-name' }, `${project.name}<span>(${project.files.length})</span>`);
  const addbtn = createSetElement('img', { class: 'add-btn', src: img1 });
  const form = toDoForm(project.name);
  titleArea.appendChild(name);
  titleArea.appendChild(addbtn);
  display.appendChild(titleArea);
  const files = project.files;
  files.forEach((value) => {
    display.appendChild(toDoElement(value));
  });
  display.appendChild(form);
  addbtn.addEventListener('click', () => {
    // console.log('hello');
    form.classList.toggle('not-visible');
  });
  if (wrapper) {
    wrapper.appendChild(display);
  }
  return display;
}
export default projectDisplay;
