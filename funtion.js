document.getElementById("name");
let name1 = document.getElementById("name").value;
let second_name = document.getElementById("second_name").value;
let last_name = document.getElementById("lastName").value;
let secondLastName = document.getElementById("second_lasName").value;

if (name1.lenght > 5 || last_name.lenght ){
    Swal.fire({
        title: "La cantidad de caracteres supera lo permitido",
        Text:"el valor ingresado debe ser de mas de 5 caracteres",
        icon: "error"
    })
}
if(name1.lenght == 0 || last_name.lenght ==0){
    Swal.fire({
        
    })

}


function enviar(){
}
function limpiar(){

}