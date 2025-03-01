const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h6").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".image-container img");

  image.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = image.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5; // Normalize (-0.5 to 0.5)
      const y = (e.clientY - top) / height - 0.5;

      const skewX = x * 15; // Adjust skew intensity
      const skewY = y * 15;

      image.style.transform = `skew(${skewX}deg, ${skewY}deg) scale(1)`;
  });

  image.addEventListener("mouseleave", () => {
      image.style.transform = "skew(0deg, 0deg) scale(1)";
  });
});
