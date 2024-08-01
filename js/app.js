// Get modal element
var modal = document.getElementById("myModal");

// Get open modal button
var btn = document.getElementById("openModalBtn");

// Get close button
var span = document.getElementsByClassName("close")[0];

// Listen for open click
btn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Listen for close click
span.addEventListener("click", function() {
    modal.style.display = "none";
});

// Listen for outside click
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
