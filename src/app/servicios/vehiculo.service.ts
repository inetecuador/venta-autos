import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Vehiculo } from "../utilitarios/modelos/Vehiculo";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class VehiculoService {
    constructor(
        private http: HttpClient
    ) { }

    baseUrl = "https://epico.gob.ec/vehiculo/public/api/";

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    getVehiculos(filtro?: string, rows?: number, page?: number): Observable<Respuesta> {
        let body = new HttpParams();
        body = filtro ? body.set('filtro', filtro) : body;
        body = rows ? body.set('rows', rows) : body;
        body = page ? body.set('page', page) : body;
        return this.http.get<Respuesta>(this.baseUrl + "vehiculos/", { params: body });
    }
    postVehiculo(vehiculo: Vehiculo) {
        return this.http.post<Respuesta>(this.baseUrl + "vehiculo/", vehiculo, this.httpOptions);
    }

    getVehiculo(codigo: string) {
        return this.http.get<Respuesta>(this.baseUrl + "vehiculo/" + codigo);
    }

    putVehiculo(vehiculo: Vehiculo, codigo: string) {
        return this.http.put<Respuesta>(this.baseUrl + "vehiculo/" + codigo, vehiculo, this.httpOptions);
    }

    deleteVehiculo(codigo: string) {
        return this.http.delete<Respuesta>(this.baseUrl + "vehiculo/" + codigo);
    }
}

export interface Respuesta {
    codigo: string;
    mensaje: string;
    data: Array<Vehiculo> | Vehiculo | any;
    rows: number;
    pages: number;
    records: number;
    page: number;
}