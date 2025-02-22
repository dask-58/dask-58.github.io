const projects = [
  {
    title: "Project 1",
    description: "lorem ipsum dolor sit amet",
    tags: ["JavaScript", "React", "Node.js"],
    github: "https://github.com//project1",
    demo: "https://project1-demo.com",
    date: "2024-02"
  },
  {
    title: "Project 2",
    description: "lorem ipsum dolor sit amet",
    tags: ["Python", "Django", "PostgreSQL"],
    github: "https://github.com//project2",
    date: "2024-01"
  },
];

function displayProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="project-links">
        ${project.github ? `<a href="${project.github}" target="_blank">GitHub</a>` : ''}
        ${project.demo ? `<a href="${project.demo}" target="_blank">Demo</a>` : ''}
      </div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });
}

document.addEventListener('DOMContentLoaded', displayProjects);

function displayLatestProjects(count = 2) {
  const projectList = document.querySelector('.project-list');
  if (!projectList) return;

  const latestProjects = projects.slice(0, count);
  
  projectList.innerHTML = latestProjects
    .map(project => `<li><a href="${project.github}">${project.title}</a></li>`)
    .join('') + '<li><a href="projects.html">view all...</a></li>';
}

if (document.querySelector('.project-list')) {
  displayLatestProjects();
}