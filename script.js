document.addEventListener("DOMContentLoaded", () => {
  const mediaModal = document.getElementById("mediaModal");
  const modalImage = document.getElementById("modalImage");
  const modalVideo = document.getElementById("modalVideo");
  const modalVideoSource = document.getElementById("modalVideoSource");
  const closeModal = document.querySelector(".close-modal");

  if (!mediaModal || !modalImage || !modalVideo || !modalVideoSource || !closeModal) {
    return;
  }

  function openImage(src) {
    mediaModal.classList.add("show");

    modalImage.style.display = "block";
    modalVideo.style.display = "none";

    modalImage.src = src;
  }

  function openVideo(src) {
    mediaModal.classList.add("show");

    modalImage.style.display = "none";
    modalVideo.style.display = "block";

    modalVideoSource.src = src;
    modalVideo.load();
    modalVideo.play().catch(() => {});
  }

  function closeMediaModal() {
    mediaModal.classList.remove("show");

    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideoSource.src = "";
  }

  document.querySelectorAll(".project-image").forEach((img) => {
    img.addEventListener("click", () => {
      openImage(img.src);
    });
  });

  document.querySelectorAll(".zoom-video").forEach((video) => {
    video.addEventListener("click", () => {
      const source = video.querySelector("source");
      if (source && source.src) {
        openVideo(source.src);
      }
    });
  });

  closeModal.addEventListener("click", closeMediaModal);

  mediaModal.addEventListener("click", (e) => {
    if (e.target === mediaModal) {
      closeMediaModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMediaModal();
    }
  });
});