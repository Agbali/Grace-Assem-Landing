 // call the get sermon function
 function getSermon() { // ask user to input Pastor's name
    let pastorsName = prompt("Which Pastor's sermon are you interested in?: \n 1. Rev. Agbali \n 2. Pastor Giwa \n 3. Pastor Karo, \n please type only 1, 2 or 3 ");
    let datePreached = prompt("Please what month's sermon are you looking for? \n For January to December please type number 1-12: ");

    // Select the html elements that we want to effect change
    let h1 = document.querySelector("h1");
    let h2 = document.querySelector("h2");

    // ifelse statement
    if (pastorsName = 1) {
        h1.innerHTML = "Download Rev Agbali's Sermon";
        h2.innerHTML = "Here";
    } else if (pastorsName = 2) {
        h1.innerHTML = "Download Pastor Giwa's Sermon";
        h2.innerHTML = "Here";
    } else if (pastorsName = 3) {
        h1.innerHTML = "Download Pastor Karo's Sermon";
        h2.innerHTML = "Here";
    }
}

// query selector to select one of the buttons, since I have two.
let sermonButton = document.querySelector("#latest-sermon");
sermonButton.addEventListener("click", getSermon);


function findUs() {

    let usersCountry = prompt("What country are you in?: \n 1. Nigeria \n 2. Outside Nigeria");
    
    if (usersCountry == 1) {

        let usersRegion= prompt("We are located in Lagos, Abuja and Ibadan, please which is closest to you?");
        let usersPlace = usersRegion.toLowerCase();

        if (usersPlace == "lagos") {
            alert("Please visit 23road, Z close Number 1, Festac Town, Lagos State");
        } else if (usersPlace == "abuja") {
            alert("Please visit 1000 Garki Road, off gwagwalada, Wuse-2, Abuja");
        } else if (usersPlace == "ibadan") {
            alert("Please visit 50, Adekola Road, off ibadan expressway, Ibadan Oyo State");
        } else {
            alert("Coming soon by God's grace! ☺");
        }
    } else if(usersCountry == 2){
        alert("Please click this link to visit our International Branch's Website!");
    }
}

let churchLocation = document.querySelector("#prox-church");
churchLocation.addEventListener("click", findUs);