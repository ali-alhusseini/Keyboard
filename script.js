let shift = false;
let capsLock = false;
let deleteKey = false;

// toggle keys
function toggleShift() {
    shift = true;
}
function toggleCapsLock() {
    capsLock = capsLock !== true;
}

// add or delete characters to/from input area
function addChar(selection) {
    var currChars = $("#inputBox").val();
    if (selection === "delete") {
        $("#inputBox").val(currChars.substring(0, currChars.length - 1));
    } else {
        if (capsLock === true) {
            $("#inputBox").val(currChars.concat(selection.toUpperCase()));
        } else if (shift === true && isNaN(selection)) {
            $("#inputBox").val(currChars.concat(selection.toUpperCase()));
            shift = false;
        } else {
            $("#inputBox").val(currChars.concat(selection));
        }
    }
}

// save blog to local storage
function saveBlog(blog) {
    if (typeof Storage !== "undefined") {
        window.localStorage.setItem("blog", document.getElementById(blog).value);
        alert("The blog has been saved succesfully!");
    }
}

// delete blog from local storage
function cancelBlog() {
    if (confirm("Are you sure you want to delete the blog entirely?") == true) {
        if (confirm("This action cannot be undone!") == true) {
            window.localStorage.removeItem("blog");
            document.location.reload();
        }
    }
}

function getBlog() {
    document.getElementById("inputBox").value = window.localStorage.getItem("blog");
}