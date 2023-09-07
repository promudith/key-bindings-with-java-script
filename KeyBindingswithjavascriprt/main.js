const $form = document.querySelector(".form");
const $input = document.querySelector(".input");
const $list = document.querySelector(".list");

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log($input.value);

  const $newItem = document.createElement("div");
  $newItem.innerText = $input.value;
  $list.appendChild($newItem);
  $input.value = "";
});

hotkeys("ctrl+z,commad+z", (event, handler) => {
  console.log("keydown", handler);
  if ($list.children.length > 0) {
    $list.removeChild($list.lastChild);
  }
});

// document.addEventListener("keydown", (event) => {
//   //sdsconsole.log("keydown", event);
//   if ((event.ctrlKey || event.metaKey) && event.key === "z") {
//     console.log("keydown1a", event);
//     if ($list.children.length > 0) {
//       $list.removeChild($list.lastChild);
//     }
//   }
// });
