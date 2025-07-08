let hisob = 0;

  function zikirQush() {
    hisob++;
    document.getElementById("hisob").textContent = hisob;
  }

  function reset() {
    hisob = 0;
    document.getElementById("hisob").textContent = hisob;
  }