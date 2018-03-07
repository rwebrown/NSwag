﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.13.3.0 (NJsonSchema v9.10.22.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export class ServiceBase {
    protected transformOptions(options: any) {
        return Promise.resolve(options);
    }

    protected transformResult(url: string, response: HttpResponse<Blob>, processor: (response: HttpResponse<Blob>) => any): Observable<any> {
        return processor(response);
    }
}

@Injectable()
export class DateService extends ServiceBase {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        super();
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    addDays(date: moment.Moment, days: number): Observable<moment.Moment> {
        let url_ = this.baseUrl + "/api/Date/AddDays?";
        if (date === undefined || date === null)
            throw new Error("The parameter 'date' must be defined and cannot be null.");
        else
            url_ += "date=" + encodeURIComponent(date ? "" + date.toJSON() : "") + "&"; 
        if (days === undefined || days === null)
            throw new Error("The parameter 'days' must be defined and cannot be null.");
        else
            url_ += "days=" + encodeURIComponent("" + days) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request("post", url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processAddDays(<any>r));
        }).catch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processAddDays(<any>r));
                } catch (e) {
                    return <Observable<moment.Moment>><any>Observable.throw(e);
                }
            } else
                return <Observable<moment.Moment>><any>Observable.throw(response_);
        });
    }

    protected processAddDays(response: HttpResponseBase): Observable<moment.Moment> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).flatMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? moment(resultData200.toString()) : <any>null;
            return Observable.of(result200);
            });
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Observable.of<moment.Moment>(<any>null);
    }

    getDayOfYear(date: moment.Moment): Observable<number> {
        let url_ = this.baseUrl + "/api/Date/GetDayOfYear?";
        if (date === undefined || date === null)
            throw new Error("The parameter 'date' must be defined and cannot be null.");
        else
            url_ += "date=" + encodeURIComponent(date ? "" + date.toJSON() : "") + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request("post", url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processGetDayOfYear(<any>r));
        }).catch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processGetDayOfYear(<any>r));
                } catch (e) {
                    return <Observable<number>><any>Observable.throw(e);
                }
            } else
                return <Observable<number>><any>Observable.throw(response_);
        });
    }

    protected processGetDayOfYear(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).flatMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return Observable.of(result200);
            });
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Observable.of<number>(<any>null);
    }
}

@Injectable()
export class EnumerationService extends ServiceBase {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        super();
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    reverseQueryEnumList(fileTypes: FileType[] | null | undefined): Observable<FileType[] | null> {
        let url_ = this.baseUrl + "/api/Enumeration/ReverseQueryEnumList?";
        if (fileTypes !== undefined)
            fileTypes && fileTypes.forEach(item => { url_ += "fileTypes=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request("get", url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processReverseQueryEnumList(<any>r));
        }).catch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processReverseQueryEnumList(<any>r));
                } catch (e) {
                    return <Observable<FileType[] | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<FileType[] | null>><any>Observable.throw(response_);
        });
    }

    protected processReverseQueryEnumList(response: HttpResponseBase): Observable<FileType[] | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).flatMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(item);
            }
            return Observable.of(result200);
            });
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Observable.of<FileType[] | null>(<any>null);
    }
}

@Injectable()
export class FileService extends ServiceBase {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        super();
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    getFile(fileName: string | null): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/File/GetFile?";
        if (fileName === undefined)
            throw new Error("The parameter 'fileName' must be defined.");
        else
            url_ += "fileName=" + encodeURIComponent("" + fileName) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request("get", url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processGetFile(<any>r));
        }).catch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processGetFile(<any>r));
                } catch (e) {
                    return <Observable<FileResponse | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<FileResponse | null>><any>Observable.throw(response_);
        });
    }

    protected processGetFile(response: HttpResponseBase): Observable<FileResponse | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return Observable.of({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Observable.of<FileResponse | null>(<any>null);
    }
}

@Injectable()
export class SampleDataService extends ServiceBase {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        super();
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    weatherForecasts(): Observable<WeatherForecast[] | null> {
        let url_ = this.baseUrl + "/api/SampleData/WeatherForecasts";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request("get", url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processWeatherForecasts(<any>r));
        }).catch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processWeatherForecasts(<any>r));
                } catch (e) {
                    return <Observable<WeatherForecast[] | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<WeatherForecast[] | null>><any>Observable.throw(response_);
        });
    }

    protected processWeatherForecasts(response: HttpResponseBase): Observable<WeatherForecast[] | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).flatMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(WeatherForecast.fromJS(item));
            }
            return Observable.of(result200);
            });
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Observable.of<WeatherForecast[] | null>(<any>null);
    }

    deleteShop(id: string, additionalIds: string[] | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/SampleData?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "additionalIds": additionalIds !== undefined && additionalIds !== null ? "" + additionalIds : "", 
                "Content-Type": "application/json", 
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request("delete", url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processDeleteShop(<any>r));
        }).catch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processDeleteShop(<any>r));
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processDeleteShop(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).flatMap(_responseText => {
            return Observable.of<void>(<any>null);
            });
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Observable.of<void>(<any>null);
    }

    getRoles(from: moment.Moment | null, to: moment.Moment | null | undefined): Observable<moment.Moment[] | null> {
        let url_ = this.baseUrl + "/api/SampleData/GetRoles?";
        if (from === undefined)
            throw new Error("The parameter 'from' must be defined.");
        else
            url_ += "from=" + encodeURIComponent(from ? "" + from.toJSON() : "") + "&"; 
        if (to !== undefined)
            url_ += "to=" + encodeURIComponent(to ? "" + to.toJSON() : "") + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request("get", url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processGetRoles(<any>r));
        }).catch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processGetRoles(<any>r));
                } catch (e) {
                    return <Observable<moment.Moment[] | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<moment.Moment[] | null>><any>Observable.throw(response_);
        });
    }

    protected processGetRoles(response: HttpResponseBase): Observable<moment.Moment[] | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).flatMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(moment(item));
            }
            return Observable.of(result200);
            });
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Observable.of<moment.Moment[] | null>(<any>null);
    }
}

export enum FileType {
    Document = <any>"Document", 
    Audio = <any>"Audio", 
    Video = <any>"Video", 
}

export class WeatherForecast implements IWeatherForecast {
    station?: Station | undefined;
    dateFormatted?: string | undefined;
    temperatureC: number;
    summary?: string | undefined;
    temperatureF: number;

    constructor(data?: IWeatherForecast) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.station = data["station"] ? Station.fromJS(data["station"]) : <any>undefined;
            this.dateFormatted = data["dateFormatted"];
            this.temperatureC = data["temperatureC"];
            this.summary = data["summary"];
            this.temperatureF = data["temperatureF"];
        }
    }

    static fromJS(data: any): WeatherForecast {
        data = typeof data === 'object' ? data : {};
        let result = new WeatherForecast();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["station"] = this.station ? this.station.toJSON() : <any>undefined;
        data["dateFormatted"] = this.dateFormatted;
        data["temperatureC"] = this.temperatureC;
        data["summary"] = this.summary;
        data["temperatureF"] = this.temperatureF;
        return data; 
    }
}

export interface IWeatherForecast {
    station?: Station | undefined;
    dateFormatted?: string | undefined;
    temperatureC: number;
    summary?: string | undefined;
    temperatureF: number;
}

export class Station implements IStation {
    name?: string | undefined;
    data?: ExtensionData | undefined;

    constructor(data?: IStation) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.data = data["data"] ? ExtensionData.fromJS(data["data"]) : <any>undefined;
        }
    }

    static fromJS(data: any): Station {
        data = typeof data === 'object' ? data : {};
        let result = new Station();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["data"] = this.data ? this.data.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IStation {
    name?: string | undefined;
    data?: ExtensionData | undefined;
}

export class ExtensionData implements IExtensionData {

    [key: string]: string | any; 

    constructor(data?: IExtensionData) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }

    static fromJS(data: any): ExtensionData {
        data = typeof data === 'object' ? data : {};
        let result = new ExtensionData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        return data; 
    }
}

export interface IExtensionData {

    [key: string]: string | any; 
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return Observable.throw(result);
    else
        return Observable.throw(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = function() { 
                observer.next(this.result);
                observer.complete();
            }
            reader.readAsText(blob); 
        }
    });
}