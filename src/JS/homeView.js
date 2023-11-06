function updateHomePageView(){
    model.app.linker.innerHTML = /*HTML*/ `
        <div class="search-container">
            <label for="text" class="fugledex">Fugledex: 
                <input type="text" id="search" placeholder="Finn fugl..."><div class="icon" onclick="search()">🔍</div>
            </label>
        </div>

        <div class="button-containers">
            <div class="allBtn" onclick="fortsett('allBirds')">Alle Fugler</div>
            <div class="foundBtn" onclick="fortsett('myBirds')">Alle Mine Funn</div>
            <label for="logg" id="loggetInn">Logget inn som: 
                <div id="logg" class="dropdownhome">
            </label>
            <div class="dropdown-toggle" onclick="toggleDropdown()">${model.app.loggedInUser}</div>
            <div class="dropdown-menu">
                <div class="dropdown-item" onclick="fortsett('startPage'); signOut();">Logg Ut</div>
            </div>
        </div>
        </div>

        <div class="bird-container">
            <h2>Mine 5 siste fugler: </h2>
            <div class="bird-list">${vista()}</div>
        </div>

        <img class="img" src="src/Picture/Bird/Greenbird-logo.png">

        <div class="leaderboard-container">
            <h2>Leaderboard</h2>
            <div class="leaderboard-list">
                <p>Linn<span class="leaderboard-info">7 - Hakkespett</span></p>
                <p>Eskil <span class="leaderboard-info">3 - Kjøttmeis</span></p>
                <p>Terje<span class="leaderboard-info">2 - Toca Toucan</span></p>
            </div>
        </div>`
}

function toggleDropdown() {
    dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') ? 'block' : 'none';
}

function search(){
    alert('Ingen fugler funnet')
}
        
function vista()
{
    /** model.data.accounts[model.app.logged_In_Identyfier].name === model.app.loggedInUser */
    let sliceable_Array = [];
    let current_Bird = 0;
    let e = "";
    if (model.data.accounts[model.app.logged_In_Identyfier].name === model.app.loggedInUser)
    {
        for(let c = 0; c < model.data.accounts[model.app.logged_In_Identyfier].birdsFound.length; c++)
        {
            current_Bird = model.data.accounts[model.app.logged_In_Identyfier].birdsFound[c]
           sliceable_Array[c] = `<p>${model.data.birds[current_Bird].bird_Name}</p>`;
        }
        e = sliceable_Array.slice(-5);
        console.log(e)
        return e;
    }
    else
    {
        console.log("Error-404 innvalid token");
    }
}

// function checkIfLastFive(arr){
//     return arr.slice(-5);
// }


// for(let i=0; i < model.data.accounts[model.app.logged_In_Identyfier].birdsFound.length; i++){
//     if(model.data.accounts[model.app.logged_In_Identyfier].birdsFound[i] === model.birds.id){
//         return model.birds.name
//     }
// } 