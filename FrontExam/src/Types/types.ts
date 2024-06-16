


export interface Lugar {

LugarId : number
NombreLugar: string 
}


export interface Ruta {
RutaId : number 
Precio : number 
LugarSalidaId : number 
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
    

    
    