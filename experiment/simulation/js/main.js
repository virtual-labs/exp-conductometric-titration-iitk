
// let txt = document.querySelector("#msg");
// function speak(text){
//     let text_speak = new SpeechSynthesisUtterance(text)
//     text_speak.rate = 1
//     text_speak.pitch = 1
//     text_speak.volume = 4
//     text_speak.lang = "hi-GB"
//     window.speechSynthesis.speak(text_speak)
// }

// window.addEventListener('load',()=>{
//     speak(txt.innerText)
// })

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {  
        let instructionElement = document.querySelector("#msg h2");
        // let text = "Make yourself familiar with the instruments by hovering over them, then click on start button to start the experiment.";

        if (instructionElement) {
            text = instructionElement.innerText.trim() || text; 
        }

        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-US";
        speech.rate = 1;
        window.speechSynthesis.speak(speech);
    }, 1500); 
});




function speakInstruction(input) {
    let text = typeof input === "string" ? input : document.getElementById(input)?.innerText;
    
    if (text) {
        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-US";
        speech.rate = 1; 
        window.speechSynthesis.speak(speech);
    }
}


document.getElementById("img3a")?.addEventListener("click", function() {
    this.style.animation = "move 10s ease-in normal";

    setTimeout(() => {
        document.querySelector(".reading").textContent = "0.99";
        speakInstruction("Reading 0.99 is showing, it's OK");
    }, 5400);
    
    setTimeout(() => {
        document.getElementById("msg").innerHTML = "<h2> Reading 0.99 is showing, it's OK, and now the conductivity meter is in 'MHOS' mode for measurement. Click on the Next button.</h2>";
        speakInstruction("and now the conductivity meter is in 'MHOS' mode for measurement. Click on the Next button")
    }, 10000);
});

document.addEventListener("DOMContentLoaded", function () {
    let img5b = document.getElementById("img5b"); 
    let img8b = document.getElementById("img8b"); 
    let img7b = document.getElementById("img7b");
    let img3b = document.getElementById("img3b"); 
    
    let isTube1Animated = false; 
    img8b.style.pointerEvents = "none"; 

    img5b.addEventListener("click", function () {
        if (!isTube1Animated) {
            img5b.style.animation = "move2 6s ease-in forwards";
            isTube1Animated = true;

            setTimeout(function () {
                img8b.style.pointerEvents = "auto"; 
            }, 6000);
        }
    });

    img8b.addEventListener("click", function () {
        img8b.style.animation = "move3 7s ease-in forwards";

     img7b.addEventListener("click", function () {
            img7b.style.transition = "all 2s ease-in-out";
            img7b.style.top = "14.5rem";
            img7b.style.left = "6.5rem";
         });
          
         setTimeout(() => {
            document.getElementById("msg").innerHTML = "<h2> Now Click on the Beaker</h2>";
            speakInstruction("Now Click on the Beaker");
        }, 7600);

        setTimeout(() => {
            document.getElementById("msg").innerHTML = "<h2> Now Click on the Conductivity Cell</h2>";
            speakInstruction("Now Click on the Conductivity Cell");
        }, 13500);

         setTimeout(() => {
            document.getElementById("msg").innerHTML = "<h2> Now Dubal tap on burette for adding 2 drops of NaOH into the HCl solution for conductance.</h2>";
            speakInstruction("Now Dubal tap on burette for adding 2 drops of NaOH into the HCl solution for conductance.");
        }, 24000);

        setTimeout(() => {
            document.querySelector(".reading").textContent = "2.17";
            speakInstruction("Reading 2.17 is showing");
        }, 21000); 
        
        setTimeout(() => {
            document.getElementById("msg").innerHTML = "<h2> Again Click on the Conductivity Cell</h2>";
            speakInstruction("Again Click on the Conductivity Cell");
        }, 32000);
        
        setTimeout(() => {
            document.querySelector(".reading").textContent = "2.04";
            speakInstruction("Reading 2.04 is decrement of the condectence value");
        }, 41000);

    img3b.addEventListener("click", function () {
        img3b.style.animation = "move4 8s ease-in forwards";
       
        setTimeout(() => {
            img3b.style.animation = "move5 8s ease-in forwards";
        }, 19500);
    });
        
           setTimeout(() => {
             alert("Your experiment is completed.");
             speakInstruction("Your experiment is completed.");
           }, 50000);
     });
 });


document.querySelectorAll(".work img").forEach(img => {
    
    if (!["img2", "img3", "img4", "img5", "img6", "img7", "img8"].includes(img.id)) return;

    img.addEventListener("mouseenter", function () {
        let tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.innerText = img.getAttribute("data-name");
        document.body.appendChild(tooltip);

        let rect = img.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + "px";
        tooltip.style.top = rect.top - 30 + "px";

        img.tooltip = tooltip;
    });

    img.addEventListener("mouseleave", function () {
        if (img.tooltip) img.tooltip.remove();
    });
});

