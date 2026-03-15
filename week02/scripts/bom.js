let input = document.querySelector("#favchap");
let button = document.querySelector('button');
let list = document.querySelector("#list");

const BOOKS = ["1 Nefi", "2 Nefi", "Jacob", "Enos", "Jarom", "Omni", "Words of Mormon", "Mosiah", "Alma", "Helaman", "3 Nefi", "4 Nefi", "Mormon", "Ether", "Moroni"];



button.addEventListener("click", function () {
    const listLength = list.children.length;
    const inputValue = input.value.trim();
    bookInclude = BOOKS.some(book => inputValue.includes(book));
    console.log(bookInclude);
    
    if (input.value.trim() !== "" && bookInclude && listLength < 10) { 
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = "❌";
    
        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = "";
        input.focus();
        
        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
        });

    } else {
        input.value = "";
        input.focus();
    }
});

