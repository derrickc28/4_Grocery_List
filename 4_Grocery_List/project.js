function initialize(){
    outBox = document.getElementById("outbox");
    grocerySelectionBox = document.getElementById("groceryselection");

    groceryList = ["Pizza", "Hamburger", "Sushi", "Guacamole", "Salmon",];
    dupesList = [];
    dupesCount = 0;

    display();
}
function display(){
    outBox.innerHTML = "0: " + groceryList[0];
    for (var i = 1; i < groceryList.length; i++)
        outBox.innerHTML += "<br />" + i + ": " + groceryList[i];
    
       
}
function addGrocery(){
    if(!groceryList.includes(grocerySelectionBox.value))
        {
            groceryList.push(grocerySelectionBox.value);
            display();
        }
}

function removeGrocery(){
    console.log("GroceryList = " + groceryList);
    console.log("indexesOf = " + grocerySelectionBox.value);
    console.log(indexesOf(groceryList, grocerySelectionBox.value));
    if(groceryList.includes(grocerySelectionBox.value))
    {   
        let trashList = indexesOf(groceryList, grocerySelectionBox.value);
        console.log("trashList = " + trashList);
        for(let i = 0; i < trashList.length; i++)
        {
            groceryList.splice(trashList[i], 1);
        }
        display();
    }
}

function indexesOf(array, itm){
    let idxList = [];

    for (var i = 0; i < array.length; i++)
        if (itm == array[i])
            idxList.push(i);
    return idxList;
}

function moveUp(){
    let indexOld = groceryList.indexOf(grocerySelectionBox.value)
    let indexNew = indexOld - 2;
    if (indexNew < 0)
    {
       return;
    }
    else
    groceryList.splice(indexOld, 1);
    groceryList.splice(indexNew, 0, grocerySelectionBox.value);
    display();
}

function moveDown(){
    let indexOld = groceryList.indexOf(grocerySelectionBox.value)
    let indexNew = indexOld + 2;
    groceryList.splice(indexOld, 1);
    groceryList.splice(indexNew, 0, grocerySelectionBox.value);
    display();
}


