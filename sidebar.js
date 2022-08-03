window.addEventListener("load", () => {
    document.getElementById("sidebar-btn").addEventListener("click", ()=>{document.getElementById('sidebar').classList.toggle('hidden')})
    const dropdowns = document.querySelectorAll("#sidebar .items .inner-items .dropdown");
    for (let dropdown of dropdowns){
        const items = dropdown.querySelector(".dropdown-items");
        dropdown.addEventListener("mouseover", ()=>{items.style.maxHeight = items.scrollHeight + "px";});
        dropdown.addEventListener("mouseout", ()=>{items.style.maxHeight = null});
    }
})