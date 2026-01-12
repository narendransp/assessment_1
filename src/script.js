let profilePic = document.getElementById("profilePic");
let isZoom = false;

profilePic.addEventListener("click", () => {
    if (!isZoom) {
        profilePic.style.transform = "scale(1.1)";
        profilePic.style.borderRadius = "60%";
        isZoom = true;
    } else {
        profilePic.style.transform = "scale(1)";
        profilePic.style.borderRadius = "50%";
        isZoom = false;
    }
});
