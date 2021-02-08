let nixonVote;
let run = true;
let endCond
let j;

function buttonToggle(e){
    j = 1;
    endCond = 2;
    while(j < endCond){
        if(this.style.color = "white"){
            this.style.color = "gray";
        } else{
            this.style.color = "white";
        }
        nixonVote = false;
        console.log(nixonVote);
        if(nixonVote == false && run == true){
            for(let i = 0; i < 5; i++){
                let button = document.createElement('button');
                button.textContent = "VOTE";
                gman.appendChild(button);
            }
            gman.addEventListener("click", removePres);
            run = false;
        }
        endCond = 1;
    }
}

function buttonToggleNew(e){
    window.close();
}

let mult = 1;

function removePres(e){
    john.style.display = "none";
    alert('Please make your selection, there are people in line...');
    gman.removeEventListener("click", removePres);
    gman.remove();
    function hoverAway(e){
        let cords = wrapper.getBoundingClientRect();
        console.log(cords);
        let geoCords = {
            top: event.clientY - cords.top - wrapper.clientTop + geo.clientHeight/2 * mult,
            left: event.clientX - cords.left - wrapper.clientLeft + geo.clientWidth/2 *  mult
        }
        geo.style.left = geoCords.left + 'px';
        geo.style.top = geoCords.top + 'px';

        //out of bounds

        if(geoCords.top < 0){
            geoCords.top = 0;
        }
        if(geoCords.left < 0){
            geoCords.left = 0;
        }
    
        if((geoCords.left + geo.clientWidth) > wrapper.clientWidth){
            mult = -1
        }
    
        if((geoCords.top + geo.clientHeight) > wrapper.clientHeight){
            mult = -1
        }
    }
    geo.addEventListener('mouseover', hoverAway)
    function rightClick(e){
            let click = 1;
            this.style.width = "50%";
            for(let i = 0; i < click; i++){
                this.style.filter = `blur(2px)`;
                this.style.transform = `rotate(45deg)`;
            }
    }
    geo.addEventListener('contextmenu', rightClick);
}

boring1.addEventListener('click', buttonToggle)
boring2.addEventListener('click', buttonToggleNew)

function nixonButton(e){
    alert('You could vote for him...');
    nixon.removeEventListener('mouseover', nixonButton);
} 

function nixonButtonTwo(e){
    alert('I knew you would do it!!');
    nixonVote = true;
    nixon.removeEventListener('click', nixonButtonTwo);
    console.log(nixonVote);
    if(nixonVote = true){
        boring1.style.cursor = "not-allowed";
        boring2.style.cursor = "not-allowed";
    }
} 

function nixonButtonThree(e){
    alert('press ok to vote :)')
    if(alert){
        nixonButtonTwo();
    }
    alert('Thank you for having a say in your own democracy!')
    nixon.textContent = "NIXON";
    boring1.textContent = "NIXON";
    boring2.textContent = "NIXON";
    john.style.display = "none";
    geo.style.display = "none";
    removeEventListener('mouseover', nixonButton)
    removeEventListener('mouseout', nixonButtonThree)
    for(let i = 0; i < 360; i++){
        nix.style.transform = `rotate(${i}deg)`;
        nix.style.filter = `invert(${i})`;
        nix.style.width = `200%`;
    }
}

function welcomePage(){
    alert(`Welcome to the 1972 United States presidential election!`)
    alert('This is a completley fair and even democratic (or should I say republican) voting poll')
    alert('Hold your watergates and begin the poll!')
}



nixon.addEventListener('mouseover', nixonButton);
nixon.addEventListener('mouseout', nixonButtonThree);
nixon.addEventListener('click', nixonButtonTwo);