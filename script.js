let count = 0;
    let seconds = 20;
    let progress = document.querySelector(".fill"); 
    let percentText = document.querySelector("#percent"); 
    let status = document.querySelector("#status");

    let interval = setInterval(function() {
      if(count <= 99) {
        count++;
        progress.style.width = `${count}%`;
        percentText.textContent = `${count}%`;
      } else {
        status.textContent = "Downloaded";
        clearInterval(interval);
      }
    }, (seconds * 1000)/100);