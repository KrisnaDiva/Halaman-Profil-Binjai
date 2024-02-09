function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.onscroll = () => {
    let sections = document.querySelectorAll("article");
    let navLinks = document.querySelectorAll("header nav ul li a");

    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav ul li a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });

    let scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  };
