// main.js
document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('article');
    
    articles.forEach(function(article) {
      article.addEventListener('click', function() {
        // Redirect to blog post's individual page
        window.location.href = 'blog-post.html';
      });
    });
  });
  