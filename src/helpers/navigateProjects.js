// Helper function to get the index of the current project
function getCurrentProjectIndex(project) {
  return projects.findIndex(project => project.name === projectName.value);
}

// Helper function to get the next project
function getNextProject() {
  const currentIndex = getCurrentProjectIndex();
  const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : -1;
  return projects[nextIndex];
}

// Helper function to get the previous project
function getPreviousProject() {
  const currentIndex = getCurrentProjectIndex();
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : -1;
  return projects[prevIndex];
}

// Helper function to get the other projects (next 3)
function getOtherProjects() {
  const currentIndex = getCurrentProjectIndex();
  const startIndex = currentIndex < projects.length - 3 ? currentIndex + 1 : 0;
  return projects.slice(startIndex, startIndex + 3);
}

export {
  getCurrentProjectIndex,
  getNextProject,
  getPreviousProject,
  getOtherProjects
}