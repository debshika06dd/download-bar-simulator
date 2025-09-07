let count = 0;
let seconds = 20;
let progress = document.querySelector(".progress");
let percentText = document.querySelector("#percent");
let statusText = document.querySelector("h2");
let interval;

function startDownload() {
    // Reset progress if clicked again
    count = 0;
    progress.style.width = "0%";
    percentText.textContent = "0%";
    statusText.textContent = "Downloading...";

    clearInterval(interval); // Prevent multiple intervals

    interval = setInterval(function () {
        if (count < 100) {
            count++;
            progress.style.width = `${count}%`;
            percentText.textContent = `${count}%`;
        } else {
            statusText.textContent = "Downloaded";
            clearInterval(interval);
        }
    }, (seconds * 1000) / 100);
}
