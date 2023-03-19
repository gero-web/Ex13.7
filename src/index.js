console.log("Hello World!");
const table = document.getElementById('vivivod');
fetch('http://localhost:3000/posts').then((res)=>{

    if(res.ok){
       res.json().then((json)=>{
           for(let obj of json){
                let row = document.createElement('tr') 
                for(let prop in obj){
                    let column = document.createElement('td') 
                    column.innerText = obj[prop];
                    row.appendChild(column);
                }
                table.appendChild(row);  
            }   
            
       });
      
    }
})
