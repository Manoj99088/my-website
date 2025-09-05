// Search Functionality
const searchInput = document.getElementById("searchInput");
const videoGrid = document.getElementById("videoGrid");
const videos = videoGrid.getElementsByClassName("video");

searchInput?.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();
  for (let vid of videos) {
    const title = vid.dataset.title.toLowerCase();
    vid.style.display = title.includes(filter) ? "" : "none";
  }
});

// Filter Functionality
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    for (let vid of videos) {
      if (category === "all" || vid.dataset.category === category) {
        vid.style.display = "";
      } else {
        vid.style.display = "none";
      }
    }
  });
});
