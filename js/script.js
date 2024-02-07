let button = document.querySelector("#button");
let grid = document.querySelector("#grid");

button.addEventListener("click", 
    function(){
        
        for (let i = 0; i < 100; i++) {
           
            let squareElement = document.createElement('div'); 
            squareElement.classList.add('square');
            grid.append(squareElement);
            
        }

    }

);