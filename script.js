function openModal(imgElement) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("modalCaption");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}
