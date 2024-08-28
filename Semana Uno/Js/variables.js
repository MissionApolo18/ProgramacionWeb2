let cadenaUno ="Esta es una cadena";
let cadenaDos ='Segunda cadena';
let cadenaTres = String("Tercera cadena");
let cadenaCuatro = new String('Esta es una cadena');

console.log(cadenaUno);
console.log(cadenaDos);
console.log(cadenaTres);
console.log(cadenaCuatro);

console.log(cadenaUno+' '+cadenaDos);
console.log(cadenaDos+' '+cadenaTres);

console.log(cadenaUno.length);

console.log(cadenaUno.indexOf('cadena'));

console.log(cadenaUno.substring(0,4));

console.log(cadenaUno.charAt(cadenaUno.length-1));

let n = 34;
console.log("Tu edad es: "+n);
console.log("Tu edad es: "+n.toString());
console.log("Tu edad es: ",String(n));

n=10
console.log("binario: ",n.toString(2));
console.log("octal: ",n.toString(8));
console.log("hexadecimal: ",n.toString(16));

let dato = "10.10"
console.log(Number(dato)*2);
console.log("21"*"3");
console.log(("34"-0)*3);

console.log(parseInt("3 datos"));
console.log(parseFloat("3.14 valor de pi"));
console.log(parseInt("110",2));
console.log(parseInt("A",16));