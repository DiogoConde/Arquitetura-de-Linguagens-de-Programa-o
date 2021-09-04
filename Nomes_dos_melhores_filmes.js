var filmes = [{"id": 70111470,"title": "Die Hard","rating": [4.0]},
{"id": 654356453,"title": "Bad Boys","rating": [5.0]},
{"id": 65432445,"title": "The Chamber","rating": [3.0]}]
var maiorque4 = (filme) => filme.rating>=4;
var novosfilmes = filmes.filter(maiorque4);
for(var i=0;i<novosfilmes.length;i++){
  novosfilmes[i]=novosfilmes[i].title;
}
console.log(novosfilmes);
           
