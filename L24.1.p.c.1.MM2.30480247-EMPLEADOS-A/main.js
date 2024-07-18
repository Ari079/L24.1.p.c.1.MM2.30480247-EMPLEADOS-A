class Empleados{
    constructor(nombre, sueldo, cargo){
        this.nombre = nombre,
        this.sueldo = sueldo,
        this.cargo = cargo
    }
}

class Empresa{
    constructor(){
        this.empleado_con_sueldo_menor = "",
        this.sueldo_menor = 200,
        this.contador_administrativos = 0,
        this.acumulador_sueldo_administrativos = 0
    }
    procesar_empleados(e){
        if(e.sueldo < this.sueldo_menor){
            this.sueldo_menor = e.sueldo
            this.empleado_con_sueldo_menor = e.nombre
        }
        if(e.cargo == "Administrativo"){
            this.contador_administrativos++
            this.acumulador_sueldo_administrativos += e.sueldo
        }
    }
    promedioSueldoAdministrativo(){
        return "$" + (this.acumulador_sueldo_administrativos/this.contador_administrativos)
    }
}


let empleado1 = new Empleados("Juan", 100 ,"Obrero")
let empleado2 = new Empleados("Ana", 50 , "Obrero")
let empleado3 = new Empleados("Lin", 200 , "Administrativo")
let empleado4 = new Empleados("Mary", 50 ,"Obrero")
let empleado5 = new Empleados("Carlos", 150 ,"Administrativo")


let empresa = new Empresa()

empresa.procesar_empleados(empleado1)
empresa.procesar_empleados(empleado2)
empresa.procesar_empleados(empleado3)
empresa.procesar_empleados(empleado4)
empresa.procesar_empleados(empleado5)


let salida = document.getElementById("salida")
salida.innerHTML = `

Uno de los que gana menos: ${empresa.empleado_con_sueldo_menor} <br>
Monto promedio pagado a los administrativos: ${empresa.promedioSueldoAdministrativo()}

`