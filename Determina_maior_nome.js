var nomes=["Ben", "Jafar", "Matthews", "Priya", "Brian"]
var tamanho=[];
for(var i=0;i<nomes.length;i++){
  tamanho[i]=nomes[i].length;
}
var max = tamanho.reduce(function(a, b) {
    return Math.max(a, b);
}, 0);
var maiornome = (nome) => nome.length===max;
var m = nomes.filter(maiornome);
console.log(m);