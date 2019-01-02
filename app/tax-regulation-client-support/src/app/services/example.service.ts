import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export default class ExampleService {
	public VALUES_API_ENDPOINT: string = 'http://localhost:53273/api/values';

	constructor(private httpClient: HttpClient) {}

	getAll(): Observable<Array<string>> {
		return this.httpClient.get<Array<string>>(this.VALUES_API_ENDPOINT);
	}
}