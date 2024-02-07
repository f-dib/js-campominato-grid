let button = document.querySelector("#button");
let grid = document.querySelector("#grid");


button.addEventListener("click", 
    function(){ 

        grid.innerHTML = "";
        
        for (i = 0; i < 100; i++) {
        
            let squareElement = document.createElement('div');
            squareElement.classList.add('square');
            squareElement.innerHTML = `${i + 1}`;
            grid.append(squareElement);

            
            squareElement.addEventListener("click", 
                function(){
                    console.log(this.innerText);
                    this.classList.toggle("activation");
                })

        }    
       
});

