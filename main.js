document.getElementById("about-btn").addEventListener("click", function() {
    window.location.href = "about.html";
  });

  document.getElementById("games-btn").addEventListener("click", function() {
    window.location.href = "games.html";
  });

  document.getElementById("other-btn").addEventListener("click", function() {
    window.location.href = "other.html";
  });

  for(const link of document.getElementsByClassName("link")) {
    link.onmousemove = e => {
    const decimal = e.clientX / link.offsetWidth;

    const basePercent = 80,
          percentRange = 20,
          adjustablePercent = percentRange * decimal;

    const lightBluePercent = basePercent + adjustablePercent;

    link.style.setProperty("--light-blue-percent", `${lightBluePercent}%`);
        }
    }
