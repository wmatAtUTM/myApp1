import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { People } from '../../providers/people/people';
import { DetailsContactPage } from '../details-contact/details-contact';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  /**
  public items = [{
    gender: "male",
    name: { title: "Mr", first: "Wan Ahmad", last: "Qais"},
    location: {
      street: "1930 Jln Pulai Jaya 53, Bdr. Pulai Jaya",
      city: "Skudai",
      state: "Johor",
      postcode: 81300
    },
    email: "waqais@ymail.com",
    login: {
      username: "qais",
      password: "password",
      salt: "",
      md5: "",
      sha1: "",
      sha256: ""
    },
    dob: "2008-06-14 03:33:33",
    registered: "2008-06-14 09:33:33",
    phone: "6019-7744164",
    cell: "6019-7744164",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/71.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/71.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg"
    },
    nat: "DE"
  }, {
    gender: "female",
    name: { title: "Ms", first: "Wan Nur", last: "Qaisara"},
    location: {
      street: "1930 Jln Pulai Jaya 53, Bdr. Pulai Jaya",
      city: "Skudai",
      state: "Johor",
      postcode: 81300
    },
    email: "wnqaisara@ymail.com",
    login: {
      username: "qaisara",
      password: "password",
      salt: "",
      md5: "",
      sha1: "",
      sha256: ""
    },
    dob: "2008-06-14 03:33:33",
    registered: "2008-06-14 09:33:33",
    phone: "6019-7744164",
    cell: "6019-7744164",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/26.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/26.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/26.jpg"
    },
    nat: "DE"
  }]
  **/

  searchQuery: string = '';

  //public people = this.service.getPeopleFromApi();
  public people = [];
  public errorMessage : string;
  public reloadData = false;

  constructor(public navCtrl: NavController, public service:People,) {
    this.service.getPeopleFromApi()
    .subscribe( 
      (response) => { 
        console.log(response); 
        this.people = response["results"]
      }, 
      (error) => console.log(error)
    )
  }

  initializeItems() {
    this.service.getPeopleFromApi()
    .subscribe( 
      (response) => { 
        console.log(response); 
        this.people = response["results"]
      }, 
      (error) => console.log(error)
    )
  }

  toggleReloadData() { 
    this.reloadData = !this.reloadData 
  }

  doRefresh(e) {
    this.service.getPeopleFromApi()
    .subscribe( 
      (response) => { 
        console.log(response); 
        this.people = response["results"]
        e.complete()
      }, 
      (error) => {
        console.log(error)
        e.complete()
      }
    )
  }

  doInfinite(e) {
    this.service.getPeopleFromApi()
      .subscribe(
        data => this.people.push(...data["results"]),
        err => console.log(err),
        () => e.complete()
      )
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.people = this.people.filter((person) => {
        return (person.name.first.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.initializeItems();
    }
  }

  pushPerson(person) {
    this.navCtrl.push(DetailsContactPage, person)
  }

}
