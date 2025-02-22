const blogs = [
  {
    title: "Blog Post 1",
    description: "lorem ipsum dolor sit amet",
    date: "2024-02-20",
    url: "#",
    tags: ["Programming", "Web Development"]
  },
  {
    title: "Blog Post 2",
    description: "lorem ipsum dolor sit amet",
    date: "2024-02-15",
    url: "#",
    tags: ["Algorithms", "Competitive Programming"]
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
          ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
      <p>${blog.excerpt}</p>
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