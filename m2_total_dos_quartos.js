var apto=[{ label: "sala", largura: 4.5, comprimento:5 },
{ label: "quarto1"  , largura: 3.5, comprimento:2 },
{ label: "quarto2"  , largura: 2.7, comprimento:2 },
{ label: "banheiro" , largura: 1.5, comprimento:2 }]
apto.m2= [];
var metros = (m2) => m2.comprimento*m2.largura;
var quarto = (comodo) => comodo.label[0]==="q";
var soma = (accu,curr) => (accu+curr);
var quartos = apto.filter(quarto);
var m2 = quartos.map(metros);
var quartosm2 = m2.reduce(soma);
console.log(quartosm2);