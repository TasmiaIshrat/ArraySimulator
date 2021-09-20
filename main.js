var myArray = [];



window.onload = function WindowLoad(event) {

    let text = "[ " + myArray.toString() + " ]";
    document.getElementById("display").innerHTML = text;


}


function add_input_to_array() {
    if(document.getElementById("input_element").value){

    
    console.log(document.getElementById("input_element").value);
    myArray.push(document.getElementById("input_element").value);
    let text = "[ " + myArray.toString() + " ]";
    document.getElementById("display").innerHTML = text;
    document.getElementById("input_element").value="";
    }
    else{
        alert("input Field is Empty!");
    }

}
function add_input_to_first_of_araay(){
    if(document.getElementById("input_element").value){
    
    myArray.unshift(document.getElementById("input_element").value);
    let text = "[ " + myArray.toString() + " ]";
    document.getElementById("display").innerHTML = text;
    document.getElementById("input_element").value="";
    }
}

function add_last_to_array() {
    if(document.getElementById("input_element").value){
    myArray.push(document.getElementById("input_element").value);
    let text = "[ " + myArray.toString() + " ]";
    document.getElementById("display").innerHTML = text;
    document.getElementById("input_element").value="";
    }

}


function delete_first_of_araay(){
     myArray.shift();
     let text = "[ " + myArray.toString() + " ]";
    document.getElementById("display").innerHTML = text;
}

function delete_last_of_araay(){

    myArray.pop();
    let text = "[ " + myArray.toString() + " ]";
    document.getElementById("display").innerHTML = text;
    

}
function add_index(){
    if(document.getElementById("input_element").value && document.getElementById("input_index").value ){

    myArray.splice(document.getElementById("input_index").value, 0, document.getElementById("input_element").value);
    let text = "[ " + myArray.toString() + " ]";
    document.getElementById("display").innerHTML = text;
    }
}
function clear_araay(){
    myArray=[];
    let text = "[ " + myArray.toString() + " ]";
    document.getElementById("display").innerHTML = text;
}