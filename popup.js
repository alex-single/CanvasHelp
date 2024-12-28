// Wait for the DOM (page content) to load
document.addEventListener("DOMContentLoaded", () => {
    // Get the button and result elements
    const analyzeButton = document.getElementById("analyze-btn");
    const resultElement = document.getElementById("result");
  
    // Add a click event listener to the button
    analyzeButton.addEventListener("click", () => {
      // Simulate analyzing assignments (this will later connect to your real logic)
      resultElement.textContent = "Analyzing assignments...";
      
      // Simulate a delay to mimic processing time
      setTimeout(() => {
        resultElement.textContent = "Analysis complete! You have 5 assignments due this week.";
      }, 2000); // Wait 2 seconds
    });
  });
  