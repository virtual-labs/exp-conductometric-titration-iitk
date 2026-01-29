
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
    this.style.animation = "move 8s ease-in normal";

    setTimeout(() => {
        document.querySelector(".reading").textContent = "0.99";
        speakInstruction("Reading 0.99 is showing, it's OK");
    }, 5400);
    
    setTimeout(() => {
        document.getElementById("msg").innerHTML = "<h2> Reading 0.99 is showing, it's OK, and now the conductivity meter is in 'MHO.S' mode for measurement. Click on the Next button.</h2>";
        speakInstruction("and now the conductivity meter is in 'MHO.S' mode for measurement. Click on the Next button")
    }, 6000);
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

             let hand = document.getElementById("img9b");  // hand movement
             hand.style.transform = "translate(-55.5vw,-42vh)"

            setTimeout(function () {
                img8b.style.pointerEvents = "auto"; 
            }, 6000);
        }
    });


    img8b.addEventListener("click", function () {
        img8b.style.animation = "move3 7s ease-in forwards";

        

     img7b.addEventListener("click", function () {
            
            img7b.style.transform = "translate(38vw, 51vh)";
                        //   translate(45vw, 54vh)
            let hand = document.getElementById("img9b");  // hand movement
             hand.style.transform = "translate(-26.5vw,-40vh)"

         });
          
         setTimeout(() => {
            document.getElementById("msg").innerHTML = "<h2> Now Click on the Beaker</h2>";
            speakInstruction("Now Click on the Beaker");
        }, 7300);
         
         let hand = document.getElementById("img9b");  // hand movement
             hand.style.transform = "translate(-45vw,-40vh)"


        setTimeout(() => {
            document.getElementById("msg").innerHTML = "<h2> Now Click on the Conductivity Cell</h2>";
            speakInstruction("Now Click on the Conductivity Cell");
        }, 13500);


         setTimeout(() => {
            document.getElementById("msg").innerHTML = "<h2> Now Dubal tap on burette for adding 2 drops of NaOH into the HCl solution for conductance.</h2>";
            speakInstruction("Now Dubal tap on burette for adding 2 drops of NaOH into the HCl solution for conductance.");
        }, 24000);
        
        

    //      //hand timing blink off
    setTimeout(() => {
        hand.style.display = "none";
    }, 27000);
            

        setTimeout(() => {
            document.querySelector(".reading").textContent = "2.17";
            speakInstruction("Reading 2.17 is showing");
        }, 21000); 
        

        setTimeout(() => {
            document.getElementById("msg").innerHTML = "<h2> Again Click on the Conductivity Cell</h2>";
            speakInstruction("Again Click on the Conductivity Cell");
        }, 32500);

        
        setTimeout(() => {
            document.querySelector(".reading").textContent = "2.04";
            speakInstruction("Reading 2.04 is decrement of the condectence value");
        }, 41000);

    img3b.addEventListener("click", function () {
        img3b.style.animation = "move4 8s ease-in forwards";

        
            let hand = document.getElementById("img9b");  // hand movement
             hand.style.transform = "translate(-40vw,-38vh) rotate(90deg)"
            //  hand.style.transform = ""
                                        
        setTimeout(() => {
            img3b.style.animation = "move5 8s ease-in forwards";
        }, 19500);
    });
      
       
           setTimeout(() => {
             alert("Your experiment is completed. Now click on Observation table button to see the observations.");
             speakInstruction("Your experiment is completed. Now click on Observation table button to see the observations.");
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


document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function () {
    const hand = document.getElementById("img9a");
    if (hand) {
      hand.style.display = "none";
    }
  });
});


//////////////
const volumeData = [
0.2,0.4,0.6,0.8,1.0,1.2,1.4,1.6,1.8,2.0,
2.2,2.4,2.6,2.8,3.0,3.2,3.4,3.6,3.8,4.0,
4.2,4.4,4.6,4.8,5.0,5.2,5.4,5.6,5.8,6.0,
6.2,6.4,6.6,6.8,7.0
];

const conductanceData = [
2.08,2.00,1.91,1.88,1.71,1.61,1.48,1.30,1.16,1.04,
0.93,0.85,0.71,0.62,0.70,0.75,0.81,0.88,0.98,1.05,
1.15,1.21,1.29,1.34,1.45,1.51,1.55,1.64,1.72,1.78,
1.86,1.91,1.98,2.07,2.12
];

const tableBody = document.getElementById("tableBody");

for (let i = 0; i < volumeData.length; i++) {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${i + 1}</td>
        <td>${volumeData[i]}</td>
        <td>${conductanceData[i]}</td>
    `;
    tableBody.appendChild(row);
}

// wire svg path connection function
