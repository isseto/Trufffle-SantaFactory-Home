///******** Menu Button States ********///
function toggleButton() {
  var activeClass = document.getElementsByClassName('active');
  if (className=="normal") {
    div.className = "active";
  }
  else {
    div.className = "normal"
  }
}

///******** Audio Control ********///
function toggleSound() {
  var audio = document.getElementById('audio');
  if (audio.paused)
    audio.play();
  else 
    audio.pause();
}


///******** Cards & Library Modals ********///
// Get the modal
var modal = document.getElementById('myModal');
var modalContent = document.getElementsByClassName('modal-content');
var tl = new TimelineMax();
tl
  .set(modal, {
    rotationX:90,
    transformPerspective: 100,
    transformStyle:"preserve-3d",
    transformOrigin:"50% 100%",
  })
  .set(modalContent, {
    y:300
  })

// Get the button that opens the modal
var btn = document.getElementsByClassName("modalBtn")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
      tl
        .fromTo(modal, .5, {
          rotationX:90,
          transformPerspective: 100,
          transformStyle:"preserve-3d",
          transformOrigin:"50% 100%",
        },{
          rotationX:0, 
          ease: Back.easeOut.config(.8)
        })
        .fromTo(modalContent, .4, {y:300}, {y:0}, '-=.3')

    for (var i = 0; i < btn.length; i++) {
        var thisBtn = btn[i];
        thisBtn.addEventListener("click", function () {
            var modal = document.getElementById(this.dataset.modal);
            //modal.style.display = "block";
            modal.addEventListener("click", function () { modal.style.display = "none"; modal.removeEventListener("click"); });
        }, false);
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    tl
      .fromTo(modalContent, .3, {y:0}, {y:300})
      .fromTo(modal, .5, {
        rotationX:0, 
        toLocaleStringransformPerspective: 100,
        transformStyle:"preserve-3d",
        transformOrigin:"50% 100%",
      },{
        rotationX:90,
        ease: Back.easeIn.config(.8)
      }, "-=.5")
  //modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}





