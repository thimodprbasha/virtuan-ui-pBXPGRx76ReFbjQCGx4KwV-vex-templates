import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Testmodel } from 'src/app/_models/Testmodel.model';
import { createRequestOption } from 'src/@vex/utils/request-util';
import { environment } from 'src/environments/environment';

type EntityArrayResponseType = HttpResponse<Testmodel[]>;
type EntityResponseType = HttpResponse<Testmodel>;


@Injectable({ providedIn: 'root' })
export class FormPageManageService {
    constructor(private http: HttpClient) {

    }

    save(manager: Testmodel, queryParams: any): Observable<EntityResponseType> {
        return this.http.post<Testmodel>(`${environment.apiUrl}/com`, manager, {params: queryParams, observe: 'response' });
    }

}