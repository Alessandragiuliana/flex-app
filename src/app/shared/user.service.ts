import { Injectable } from '@angular/core';
import { IUser } from '../model/user.model';
import { Observable, of } from 'rxjs';
import { ChatService } from './chat.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';

  constructor(private chatService: ChatService, private http: HttpClient) { }


  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl)
  }

  getHeroes(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl)
      .pipe(
        tap(_ => this.log('fetched users')),
        catchError(this.handleError<IUser[]>('getUsers', []))
      );
  }

  log(mes: string) {
    console.log("log services", mes);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // invia l'errore all'infrastruttura di registrazione remota
      console.error(error);
      // TODO:miglior lavoro di trasformazione dell'errore per il consumo dell'utente
      this.log(`${operation} failed: ${error.message}`);
      // Consente all'app di continuare a funzionare restituendo un risultato vuoto.
      return of(result as T);
    };
  }
  //Dopo aver segnalato l'errore alla console, il gestore costruisce un messaggio descrittivo e restituisce un valore sicuro all'applicazione in modo che l'applicazione possa continuare a funzionare.

}
