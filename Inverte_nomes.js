var nomes=["Ben", "Jafar", "Matthews", "Priya", "Brian"]
var inverte = (value) => value.split("").reverse().join("");
var invertidos = nomes.map(inverte);
console.log(invertidos)