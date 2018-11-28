import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class People {

  private apiUrl = "https://randomuser.me/api/?results=30";
  private apiGender = "";

  constructor(public http: HttpClient) {
    console.log('Hello People Provider');
  }

  getPeopleFromApi(){
    return this.http.get(this.apiUrl);
  }

  getPeopleFromApiFilterByGender(genderType : String, page : number) {
    this.apiGender = "https://randomuser.me/api/?page=" + page + "&gender=" + genderType + "&results=30";
    console.log(this.apiGender);
    return this.http.get(this.apiGender);
  }

}
