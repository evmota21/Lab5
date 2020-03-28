function addItem(){

    addItemButton.addEventListener('click', event =>{
        console.log("clickeaste add item!");
        let input = document.querySelector('input[type="text"]');
        let item = input.value;
        ShoppingList.innerHTML+= `
            <li id="${item}"> ${item} 
                <button class="check" id="${item}Button"> check </button>
                <button class="delete" id="${item}Button"> delete </button>
            </li>
        `
        
        let currentItem = document.getElementById(item);

        currentItem.style.border = "solid black";
        currentItem.style.width = "30%";
        currentItem.style.listStyle = "none";
        deleteItem();
        checkItem();



        event.preventDefault();
    });

}

function deleteItem(){
    let deleteButtons = document.querySelectorAll('.delete');
    console.log({deleteButtons});
    for(let i = 0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', event =>{
            console.log("clickeaste un delete!");
            itemId = deleteButtons[i].parentNode.id;
            let deleteItemNow = document.getElementById(itemId);
            deleteItemNow.parentNode.removeChild(deleteItemNow);
        });
    }
}

function checkItem(){
    let checkButtons = document.querySelectorAll('.check');
    console.log({checkButtons});
    for(let i = 0; i<checkButtons.length; i++){
        checkButtons[i].addEventListener('click', event =>{
            console.log("clickeaste un check!");
            itemId = checkButtons[i].parentNode.id;
            let checkItemNow = document.getElementById(itemId);
            checkItemNow.style.textDecoration = "line-through";
        });
    }
}


function init(){
    addItem();
}

let addItemButton = document.querySelector('button[type=submit]');
let ShoppingList = document.querySelector("ul");
init();
