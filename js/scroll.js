const options = {
  root: null,
  rootMargin: "-200px -100px",
  threshold: 0
};

const elms = document.querySelectorAll(".div1, .div2, .div3, .div4, .div5, .div6");
const callback = function(entries, observer) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
          entry.target.classList.add("alpha");
      }// else {
          //entry.target.classList.remove("alpha");
      //}
  });
}

const io = new IntersectionObserver(callback, options);
elms.forEach(elm => {
  io.observe(elm);
});
