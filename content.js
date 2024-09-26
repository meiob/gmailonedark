window.addEventListener('load', function() {
    console.log("Script loaded, waiting for Gmail load...");
    var gmail = new Gmail();
    gmail.observe.on("load", function() {
      console.log("Gmail loaded, applying dark mode...");
      document.documentElement.classList.add('dark-mode');
    });
  });
  