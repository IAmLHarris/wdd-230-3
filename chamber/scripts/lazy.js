let image_ports = document.querySelectorAll("img[data-src]");

let image_options = {
  threshold: 1,
  rootMargin: "0px 0px 25px 0px",
};

function wanted_image(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }

  img.src = src;
  img.removeAttribute("data-src");
  img.setAttribute("class", "image-loaded");
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        wanted_image(item.target);
        observer.unobserve(item.target);
      }
    });
  }, image_options);

  image_ports.forEach((img) => {
    observer.observe(img);
  });
} else {
  image_ports.forEach((img) => {
    wanted_image(img);
  });
}
