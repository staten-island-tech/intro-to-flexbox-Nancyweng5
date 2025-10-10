function addToCard(){;
    const buttons = document.querySelectorAll("button")
    //create array if we need more than forEach
    const btnarray = Array.from(buttons)
    btnarray.forEach((btn) => btn.addEventListerner("click", function(event){
        console.log(event.target.textContent);
        console.log(event.target.closest(".display-card")).getAttribute("data-title")
    })
);
    }
addToCard();