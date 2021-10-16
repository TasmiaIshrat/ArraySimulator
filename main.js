var myArray = [];

function showArrayStatus() {

    let text = "[ " + myArray.toString() + " ]";
    document.getElementById("display").innerHTML = text;

}


function getInputValue(){
    return  document.getElementById("input_element").value;
    
}


function clearInputField(){
    document.getElementById("input_element").value = "" ;
}


window.onload = function WindowLoad(event) {

    showArrayStatus();

}


function add_input_to_array() {

    if (!getInputValue()) {
        alert("input Field is Empty!");
        return;
    }

    myArray.push(getInputValue());
    showArrayStatus();
    clearInputField();



}


function add_input_to_first_of_araay() {
    if (getInputValue()) {

        myArray.unshift(getInputValue());
        showArrayStatus();
        clearInputField();
    }
}

function add_last_to_array() {
    if (getInputValue()) {
        myArray.push(getInputValue());
        showArrayStatus();
        clearInputField();
    }

}


function delete_first_of_araay() {
    myArray.shift();
    showArrayStatus();
}

function delete_last_of_araay() {

    myArray.pop();
    showArrayStatus();


}


function add_index() {
    if (getInputValue() && document.getElementById("input_index").value) {

        myArray.splice(document.getElementById("input_index").value, 0, getInputValue());
        showArrayStatus();
    }
}


function clear_araay() {
    myArray = [];
    showArrayStatus();
}