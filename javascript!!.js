document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("scroll", function() {
        let footer = document.querySelector("footer");
        let scrollPosition = window.innerHeight + window.scrollY; 
        let pageHeight = document.body.offsetHeight; 

        if (scrollPosition >= pageHeight - 10) { 
            footer.classList.add("show"); 
        } else {
            footer.classList.remove("show"); 
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let pdfSelector = document.getElementById("pdfSelector");
    let pdfViewer = document.getElementById("pdfViewer");
    let imageViewer = document.getElementById("imageViewer");

    pdfSelector.addEventListener("change", function() {
        let selectedOption = pdfSelector.options[pdfSelector.selectedIndex];
        let fileType = selectedOption.getAttribute("data-type");
        let filePath = selectedOption.value;

        if (fileType === "pdf") {
            pdfViewer.src = filePath;
            pdfViewer.style.display = "block";  // Show PDF viewer
            imageViewer.style.display = "none"; // Hide image viewer
        } else if (fileType === "image") {
            imageViewer.src = filePath;
            imageViewer.style.display = "block";  // Show image viewer
            pdfViewer.style.display = "none";    // Hide PDF viewer
        }
    });
});