let totalTime = 10 * 60; // 10 minutes in seconds
    const display = document.getElementById("display");

    function updateTimer() {
      const minutes = Math.floor(totalTime / 60);
      const seconds = totalTime % 60;

      display.textContent =
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds);

      if (totalTime <= 0) {
        clearInterval(timer);
        display.textContent = "00:00";
        alert(" Time's up! 10 minutes reached!");
      }

      totalTime--;
    }

    // Start automatically
    window.onload = () => {
      updateTimer(); // show immediately
      timer = setInterval(updateTimer, 1000);
    };
    
   document.getElementById("ca").onclick = function(){
    document.getElementById("loader").style.display = "flex";
   }
   document.getElementById("uk").onclick = function(){
    document.getElementById("loader").style.display = "flex"
   }
   document.getElementById("us").onclick = function(){
    document.getElementById("loader").style.display = "flex"
   }
   document.getElementById("btn").onclick = function(){
    document.getElementById("loader").style.display = "flex"

   }
// LOADING ANIMATION
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const loadingText = document.getElementById("loadingText");

  // Step 1: Start with "Loading..."
  loadingText.textContent = "Loading...";

  // Step 2: After 3 seconds, change text to "Processing..."
  setTimeout(() => {
    loadingText.textContent = "Processing...";
  }, 3000);

  // Step 3: Fade out the loader after 5 seconds total
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 5000);
});
