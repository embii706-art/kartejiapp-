export function render(containerId = 'app') {
  const hasDocument = typeof document !== 'undefined';
  if (!hasDocument) {
    if (typeof console !== 'undefined') {
      console.warn('Render skipped: no document available in this environment.');
    }
    return { rendered: false, container: null };
  }

  const app = document.getElementById(containerId);
  if (app) {
    const existingMain = app.querySelector('main');
    const main = existingMain || document.createElement('main');

    let heading = main.querySelector('h1');
    if (!heading) {
      heading = document.createElement('h1');
      main.appendChild(heading);
    }
    heading.textContent = 'KARTEJI';

    let paragraph = main.querySelector('p');
    if (!paragraph) {
      paragraph = document.createElement('p');
      main.appendChild(paragraph);
    }
    paragraph.textContent = 'Karang Taruna Digital';

    // Replace container content to ensure a consistent structure on each render.
    app.replaceChildren(main);
    return { rendered: true, container: app };
  }

  if (typeof console !== 'undefined') {
    console.warn(`App container with id="${containerId}" not found. Ensure an element with id="${containerId}" exists in your HTML.`);
  }
  return { rendered: false, container: null };
}
