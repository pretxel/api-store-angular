import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Observable';
import 'rxjs/add/observable/throw';



@Injectable()
export class ProductService {
    private productsUrl = 'http://api-store.duckdns.org/api/products';  // URL to web API
    constructor (private http: Http) {}

    products(token: string): Observable<string[]> {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token  });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.productsUrl , options )
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}