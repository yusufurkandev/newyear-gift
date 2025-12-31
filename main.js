const scenes = document.querySelectorAll(".scene");

const lines2 = document.querySelectorAll(".scene-2 .line");
const photos2 = document.querySelectorAll(".scene-2 img");

const lines3 = document.querySelectorAll(".scene-3 .line");
const photos3 = document.querySelectorAll(".scene-3 img");

let l2 = 0, p2 = 0, l3 = 0, p3 = 0;

setTimeout(() => {
  scenes[0].classList.remove("active");
  scenes[1].classList.add("active");
  showLines2();
}, 5000);

function showLines2() {
  if (l2 > 0) lines2[l2 - 1].classList.remove("active");
  if (l2 < lines2.length) {
    lines2[l2++].classList.add("active");
    setTimeout(showLines2, 3000);
  } else setTimeout(showPhotos2, 2000);
}

function showPhotos2() {
  if (p2 > 0) photos2[p2 - 1].classList.remove("show");
  if (p2 < photos2.length) {
    photos2[p2++].classList.add("show");
    setTimeout(showPhotos2, 3000);
  } else setTimeout(goScene3, 2500);
}

function goScene3() {
  scenes[1].classList.remove("active");
  scenes[2].classList.add("active");
  showLines3();
}

function showLines3() {
  if (l3 > 0) lines3[l3 - 1].classList.remove("active");
  if (l3 < lines3.length) {
    lines3[l3++].classList.add("active");
    setTimeout(showLines3, 3000);
  } else setTimeout(showPhotos3, 2000);
}

function showPhotos3() {
  if (p3 > 0) photos3[p3 - 1].classList.remove("show");
  if (p3 < photos3.length) {
    photos3[p3++].classList.add("show");
    setTimeout(showPhotos3, 3000);
  } else setTimeout(goFinal, 2500);
}

function goFinal() {
  scenes[2].classList.remove("active");
  scenes[3].classList.add("active");

  // 🔥 BURASI ÇİÇEĞE GEÇİŞ NOKTASI
  setTimeout(() => {
    window.location.href = "flower.html";
  }, 4000);
}
