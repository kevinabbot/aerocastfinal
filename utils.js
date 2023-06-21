  // Get all the dropdown buttons and contents
  const dropdownButtons = document.querySelectorAll(".dropdownButton");
  const dropdownContents = document.querySelectorAll(".dropdownContent");

  // Add click event listener to each dropdown button
  dropdownButtons.forEach((button) => {
      button.addEventListener("click", () => {
          // Close all other dropdown menus
          dropdownContents.forEach((content) => {
              if (content !== button.nextElementSibling) {
                  content.classList.remove("active");
              }
          });
          // Toggle the 'active' class of the corresponding dropdown content
          const dropdownContent = button.nextElementSibling;
          dropdownContent.classList.toggle("active");
      });
  });

  // Close dropdown menus when clicking outside
  window.addEventListener("click", (event) => {
      dropdownButtons.forEach((button) => {
          const dropdownContent = button.nextElementSibling;
          if (!button.contains(event.target) && !dropdownContent.contains(event.target)) {
              dropdownContent.classList.remove("active");
          }
      });
  });


  // Fetch and convert Markdown files to HTML
  function fetchMarkdownFile(filename) {
      return fetch(filename)
          .then((response) => response.text())
          .then((markdownContent) => {
              const converter = new showdown.Converter();
              const html = converter.makeHtml(markdownContent);
              return html;
          });
  }

  // Update sidebar content with Markdown file content
  function updateSidebarContent(filename, elementId) {
      fetchMarkdownFile(filename).then((html) => {
          const element = document.getElementById(elementId);
          element.innerHTML = html;
      });
  }