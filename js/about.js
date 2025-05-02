document.addEventListener("DOMContentLoaded", () => {
    let visitCount = sessionStorage.getItem("aboutVisits") || 0;
    visitCount++;
    sessionStorage.setItem("aboutVisits", visitCount);
    console.log(`About page visited ${visitCount} times this session.`);
  });
  