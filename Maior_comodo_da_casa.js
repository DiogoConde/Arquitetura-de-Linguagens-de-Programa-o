var apto=[{ label: "sala", largura: 4.5, comprimento:5 },
{ label: "quarto1"  , largura: 3.5, comprimento:2 },
{ label: "quarto2"  , largura: 2.7, comprimento:2 },
{ label: "banheiro" , largura: 1.5, comprimento:2 }]
apto.area=[];
for(var i=0;i<apto.length;i++){
  apto[i].area=apto[i].comprimento*apto[i].largura;
}
var m2=[];
for(var l=0;l<apto.length;l++){
  m2[l]=apto[l].area;
  }
var maior = m2.reduce(function(a, b) {
    return Math.max(a, b);
}, 0);
var maiorcomodo = (comodo) => comodo.area===maior;
var mc = apto.filter(maiorcomodo);
for(var m=0;m<mc.length;m++){
  delete(mc[m].comprimento);
  delete(mc[m].largura);
}
console.log(mc);

