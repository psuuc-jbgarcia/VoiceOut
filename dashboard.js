document.addEventListener("DOMContentLoaded", function() {
  const named = document.getElementById("name");
  const aged = document.getElementById("age");
  const country = document.getElementById("country");
  const html = document.getElementById("html");

  html.addEventListener("mouseover", function() {
    named.innerText = "Jerico Garcia";
    aged.innerText = "Age: 18";
    country.innerText = "Country: Philippines";
  });

  const form = document.getElementById("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    searchPosts();
  });

  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener("input", function() {
    searchPosts();
  });

  function searchPosts() {
    var searchTerm = searchInput.value.toLowerCase();
    var blogTitles = document.querySelectorAll('.blog-title');

    for (var i = 0; i < blogTitles.length; i++) {
      var title = blogTitles[i].innerText.toLowerCase();
      var post = blogTitles[i].parentNode.parentNode;

      if (title.includes(searchTerm)) {
        post.style.display = 'block'; // Show the blog post
      } else {
        post.style.display = 'none'; // Hide the blog post
      }
    }
  }
});
