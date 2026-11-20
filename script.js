document.addEventListener('mousemove', (e) => {
    const elements = document.querySelectorAll('.floating-element');
    
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    elements.forEach((el, index) => {
        const speed = index === 0 ? 1 : index === 1 ? -1.5 : 2;
        el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});
window.addEventListener("load", function() {
  const loader = document.getElementById("loader-wrapper");
  setTimeout(() => {
    loader.classList.add("fade-out");
    setTimeout(() => {
        loader.style.display = "none";
    }, 800);
  }, 1500); 
});
