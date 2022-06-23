function greet(name) {
    console.log('Hello ' + name);
}

function newThread() {
    document.getElementById("new-thread").style.visibility = "hidden";
    document.getElementById("form-thread").style.visibility = "visible";
}

greet('John');
greet('Mary');