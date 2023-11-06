"use strict";

/* All Birds */
initList();

function sortBirds(){
    switch (model.app.sortMethod) {
        case "vekt":
            vekt()
            break;
        case "fart":
            fart()
            break;
        case "size":
            size()
            break;
        case "lifespan":
            lifespan()
            break;
    }
}

function setSort(sortType){
    model.app.sortMethod = sortType
    sortBirds()
    updateView()
}

const clear_registration = ()=>
{
    model.inputs.registerPage.user_Name = "";
    model.inputs.registerPage.name = "";
    model.inputs.registerPage.password = "";
    model.inputs.registerPage.e_mail = "";
}

const clear_login = ()=>
{
    model.inputs.loginPage.password = "";
    model.inputs.loginPage.user_Name = "";
}
const signOut = () =>
{
    model.app.loggedInUser = "";
    model.app.logged_In_Identyfier = null;
}

const upload = () =>
{
    model.data.accounts.push(model.inputs.registerPage);
}

const vekt = () =>
{
    model.app.sortedList = [...model.app.sortedList.sort((a,b) => b.we - a.we)]
}

const fart = () =>
{
    model.app.sortedList = [...model.app.sortedList.sort((a,b) => b.speed - a.speed)]
}

const size = () => 
{
    model.app.sortedList = [...model.app.sortedList.sort((a,b) => b.si - a.si)]
}

const lifespan = () =>
{
    model.app.sortedList = [...model.app.sortedList.sort((a,b) => b.li - a.li)]
}

function validator()
{
    let i;
    for(i = 0; i != model.data.accounts.length; i++)
    {
        if(model.data.accounts[i].user_Name == model.inputs.loginPage.user_Name 
            && 
            model.data.accounts[i].password == model.inputs.loginPage.password)
        {
            model.app.loggedInUser = model.data.accounts[i].name;
            model.app.logged_In_Identyfier = model.data.accounts[i].accountId;
            fortsett("home");
            return;
        }
    }

    if(true)
    {
        alert("Wrong username or password.");
        return;
    }
}

function regValidator()
{
    const root = model.data.accounts[model.data.accounts.length];
    console.log();
}

function fortsett(param)
{
    model.app.currentPage = param
    updateView()
}

// function splicer(array,char)
// {
//     for(let i = 0; i != array.length; i++)
//     {
//         switch(char)
//         {
//             case char: 
//             array[i].splice(i, 1);
//             break;

//             default:
//         }
//         return array;
//     }
// }

const run = (bird)=>
{tracker.push(bird);console.log("Bird tracker " + bird);}

function showDropDown()
{document.getElementById("dropDown").classList.toggle("show");}

const swap = (csslinker,title,link) =>
{
    console.log(csslinker)
    console.log(title)
    const linker = document.querySelector('.headerTag');
    linker.innerHTML = /*HTML*/`
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${csslinker}">
                        <title>${title}</title>`;
    document.body.style.backgroundImage = "url("+link+")"
    console.log(linker + " " + csslinker)
    console.log(model.app.pageOrigin);
    console.log(model.app.currentPage);
}

function initList() {
    model.app.sortedList = [...model.data.birds];
}