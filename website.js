const fbBtn = document.getElementById("message-btn");
const removedBtn = document.getElementById("removed-btn");

fbBtn.addEventListener("click", () => {
  if (fbBtn.innerHTML === "Confirm") {
    alert("Confirm successfully done!");
    fbBtn.innerHTML = "Confirmed";
  } else {
    fbBtn.innerHTML = "Confirmed";
  }
});

removedBtn.addEventListener("click", () => {
  if (removedBtn.innerHTML === "Remove") {
    alert("Are you sure you want to remove ?");

    removedBtn.innerHTML = "Removed";
  } else {
    removedBtn.innerHTML = "Removed already";
  }
});
