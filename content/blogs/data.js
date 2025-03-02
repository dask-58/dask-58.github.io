const blogs = [
  {
    title: "Why this website",
    description: "reason why? i will settle with this website",
    date: "2025-02-24",
    url: "#",
    tags: ["web dev"]
  },
  {
    title: "How it started",
    description: "backstory",
    date: "2024-04-23",
    url: "https://dask58.blogspot.com/2024/04/how-it-started.html",
    tags: ["writing", "blogging"]
  },
];

function displayBlogs() {
  const blogsGrid = document.getElementById('blogsGrid');
  if (!blogsGrid) return;

  blogs.forEach(blog => {
    const blogCard = document.createElement('div');
    blogCard.className = 'blog-card';

    blogCard.innerHTML = `
      <h3><a href="${blog.url}">${blog.title}</a></h3>
      <div class="blog-meta">
        <span class="date">${new Date(blog.date).toLocaleDateString()}</span>
        <div class="tags">
          ${blog.tags.filter(tag => tag).map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
      <p>${blog.description}</p>
    `;

    blogsGrid.appendChild(blogCard);
  });
}

document.addEventListener('DOMContentLoaded', displayBlogs);

function displayLatestBlogs(count = 2) {
  const blogList = document.querySelector('.blogs .project-list');
  if (!blogList) return;

  const latestBlogs = blogs.slice(0, count);

  blogList.innerHTML = latestBlogs
    .map(blog => `<li><a href="${blog.url}">${blog.title}</a></li>`)
    .join('') + '<li><a href="blogs.html">view all...</a></li>';
}

if (document.querySelector('.blogs .project-list')) {
  displayLatestBlogs();
}