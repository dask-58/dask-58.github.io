const projects = [
  {
    title: "HUKUM",
    description: "Image processing based attendance system for our course CS301",
    tags: ["TypeScript"],
    live: "https://hukum-rose.vercel.app",
    date: "2025-01"
  },
  {
    title: "RsTranslate",
    description: "Translate from one language to another through your terminal.",
    tags: ["Rust"],
    github: "https://github.com/dask-58/rstranslate",
    date: "2024-12"
  },
  {
    title: "ElonMoney",
    description: "Spend the money of the richest man on earth as you wish!",
    tags: ["JavaScript"],
    live: "https://elonmoney.vercel.app/",
    date: "2024-08"
  },
  {
    title: "dot",
    description: "my dotfiles",
    tags: ["Lua", "Shell", "Python"],
    github: "https://github.com/dask-58/dot",
    live: "https://dotfyle.com/dask-58/dot-nvim",
    date: "2024-03"
  },
  {
    title: "Scientist Whack",
    description: "A game where you try to smack the max number of scientists!",
    tags: ["JavaScript"],
    github: "https://github.com/dask-58/scientist.whack",
    live: "https://dask-58.github.io/scientist.whack",
    date: "2024-11"
  },
  {
    title: "Erudite 2.0",
    description: "A google gemini pro powered AI assistant",
    tags: ["JavaScript", "React", "Node.js"],
    live: "https://erudite-20.vercel.app/",
    date: "2024-01"
  }
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
        ${project.live ? `<a href="${project.live}" target="_blank">Live</a>` : ''}
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