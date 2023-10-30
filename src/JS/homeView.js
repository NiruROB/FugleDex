function updateHomePageView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div class="search-container">
    <label for="text" class="fugledex">Fugledex: 
    <input type="text" id="search" placeholder="Finn fugl..."><div class="icon" onclick="search()">🔍</div>
    </label>
</div>
<div class="button-containers">
    <div class="allBtn" onclick="fortsett('')">Alle Fugler</div>
<div class="foundBtn" onclick="myBirds()">Alle Mine Funn</div>
<label for="logg" id="loggetInn">Logget inn som: 
<div id="logg" class="dropdownhome">
</label>
    <div class="dropdown-toggle" onclick="toggleDropdown()">Linn </div>
    <div class="dropdown-menu">
        <div class="dropdown-item" onclick="loggOut()">Logg Ut</div>
    </div>
</div>
</div>

<div class="bird-container">
<h2>Mine 5 siste fugler: </h2>
<div class="bird-list">
    <p>Toca Toucan</p>
    <p>Kjøttmeis</p>
    <p>Blåmeis</p>
    <p>Kongeørn</p>
    <p>Fossekall</p>
</div>
</div>

<div class="leaderboard-container">
    <h2>Leaderboard</h2>
    <div class="leaderboard-list">
        <p>Linn<span class="leaderboard-info">7 - Hakkespett</span></p>
        <p>Eskil <span class="leaderboard-info">3 - Kjøttmeis</span></p>
        <p>Terje<span class="leaderboard-info">2 - Toca Toucan</span></p>
    </div>
</div>
    `
}

