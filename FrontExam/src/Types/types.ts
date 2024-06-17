


export interface Lugar {
LugarId : number
NombreLugar: string 
}


export interface Ruta {
RutaId : number 
Precio : number 
LugarSalidaId : number 
LugarSalida : string 
LUgarDestinoId: number 
LugarDestino : string 
   
}


export interface Tiquete {
    TiqueteId : number 
    Fecha: Date
    RutaId : number 
    LugarSalidaId : number 
    LUgarDestinoId: number 
    precio : number 
       
    }



export interface Menu {
    titulo : string 
    direccion : string
    menuId : number 
}
    

    
    