
document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let area = document.getElementById("area").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value;

    if (fname === "" || lname === "") {
        alert("Please enter full name");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter valid email");
        return;
    }

    if (area.length < 2 || phone.length < 10) {
        alert("Please enter valid phone number");
        return;
    }

    if (date === "") {
        alert("Please select a date");
        return;
    }


    window.location.href = "index.html";
});
