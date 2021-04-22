import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient, private router: Router) { }

  data: any

  onSubmit(contactForm) {
    let data = { name: contactForm.name, email: contactForm.email, query: contactForm.query };
    this.http.post("http://localhost:3000/contact", data).subscribe((response: any) => {
      console.log(response);
      this.router.navigateByUrl("/");
    })
  }
}
