document.getElementById("signInBtn").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("loginForm").style.display = "flex";
});

document.getElementById("closeForm").addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "none";
});

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById("loginForm");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}