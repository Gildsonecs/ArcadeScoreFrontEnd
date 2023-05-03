import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private apiUrl = 'https://localhost:44304/Score/ranking';

  constructor(private http: HttpClient) { }

  getRanking(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
