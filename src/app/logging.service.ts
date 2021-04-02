import { Injectable, Injector, ErrorHandler } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface Message {
  contents: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoggingService implements ErrorHandler {
  message: Message;

  constructor(private injector: Injector, private http:HttpClient) { }

  handleError(error: any) {
    this.http
            .post("http://localhost:8888/",error)
            .subscribe(
              (val) => {
                  console.log("POST call successful value returned in body",
                              val);
              },
              response => {
                  console.log("POST call in error", response);
              },
              () => {
                  console.log("The POST observable is now completed.");
              });
  }
}
