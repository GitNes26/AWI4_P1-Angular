export class Persona {
    nombre    :String
    apellidos :String
    edad      :Number
    sexo      :String

    public setNombre(nombre:string){
        this.nombre = nombre
    }

    public getNombre(){
        return this.nombre;
    }
    
    public setApellidos(apellidos:string){
        this.apellidos = apellidos
    }

    public getApellidos(){
        return this.apellidos;
    }

    public setEdad(edad:number){
        this.edad = edad
    }

    public getEdad(){
        return this.edad;
    }

    public setSexo(sexo:string){
        this.sexo = sexo
    }

    public getSexo(){
        return this.sexo;
    }
}
