function cal(a :number,b :number, c :number):number{
    let mayor = 0;
    if (a > b) {
        mayor = a;
    } else {
        mayor = b;
    }

    if (c > mayor) {
        mayor = c;
    }
    return mayor;
}
console.log(cal(1,3,2));   // 3


/*function mostrarNombre(nombre : string):string {
    return "Hola soy " + nombre;
}
console.log(mostrarNombre("Pablo Mendez"));*/





