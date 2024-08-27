function main(){
    var number = 1;
    document.querySelector(".add").addEventListener("click",()=>{

        
        
        let div = document.createElement('div')
        div.innerHTML = `<h3> Topic: ${document.querySelector(".task").value}</h3> <span> Due Date: ${document.querySelector(".date").value}</span> <button class="del" id="${number}" ><img src="delete.svg"/></button> `
        div.classList.add(`box`)
        document.querySelector(".list").append(div)

        div.querySelector('.del').addEventListener('click', function() {
            div.remove();
        });

        if(document.querySelector(".task").value !== ""){
            document.querySelector(".task").value = ""
            document.querySelector(".date").value
        }
        
        number = number + 1
        
    })
    console.log(number)

    

    
}
main()