const $d = document,
  $btn_open = $d.getElementById("toggle"),
  $btn_close = $d.getElementById("close"),
  $text_box = $d.querySelector(".text-box")

$btn_open.addEventListener("click", (e) => {
  $text_box.classList.add("show")
})

$btn_close.addEventListener("click", () => {
  $text_box.classList.remove("show")
})
