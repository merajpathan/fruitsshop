import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'

const api:any="http://localhost:9999/user/"

@Injectable()
export class DataService {
 



    constructor(private http:HttpClient) { }


}
