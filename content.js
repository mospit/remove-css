 const links = document.querySelectorAll('link[rel="stylesheet');
  links.forEach(link => {
    link.parentNode.removeChild(link);
  });
