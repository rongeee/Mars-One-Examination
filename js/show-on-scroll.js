let scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

const elementsToShow = document.querySelectorAll(".show-on-scroll");

const loop = () => {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });

  scroll(loop);
};

const isElementInViewport = (el) => {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
};

loop();
