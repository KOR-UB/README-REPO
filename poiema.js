const listtoggle = document.querySelectorAll(".listtoggle");
const list_a = document.querySelectorAll(".hiddenlist a");
const index_a = document.querySelectorAll(".index a");

Array.from(index_a).forEach(index_a => index_a.addEventListener("click", NavHandler));

function NavHandler()
{
    const hiddenlist = document.querySelector(".hiddenlist-group");
    hiddenlist.classList.toggle("active");
}
Array.from(list_a).forEach(list_a => list_a.addEventListener("click",NavHandler));

Array.from(listtoggle).forEach(listtoggle => listtoggle.addEventListener("click",NavHandler));