import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    addCar = new FormGroup({
        name: new FormControl('', Validators.required),
        image: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required)
    })

  cars = [{
    name: "BMW",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.carscoops.com%2Fwp-content%2Fuploads%2F2019%2F10%2Feb7e57a6-bmw-m8-competition.jpg&f=1&nofb=1",
    description: "A nice m5 BMW"
  },{
    name: "Audi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farticle.images.consumerreports.org%2Fprod%2Fcontent%2Fdam%2FCRO%2520Images%25202019%2FCars%2FMarch%2FCR-Cars-InlineHero-2016-Audi-A6-f-3-19.jpg&f=1&nofb=1",
    description: "A nice A5 Audi"

  },{
    name: "Citroen",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8a%2FCitroen_2CV_1X7A7979.jpg%2F1200px-Citroen_2CV_1X7A7979.jpg&f=1&nofb=1",
    description: "A nice 1970's Citroen"
  },{
    name: "Buggatti Veron",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nearbyme2.com%2Fwp-content%2Fuploads%2F2020%2F04%2FTop-10-Coolest-Cars-in-the-World.jpg&f=1&nofb=1",
    description: "A premium car"
  }]
    
  constructor() { }
  ngOnInit(): void {

  }

  submitCar(){
    if (this.addCar.valid){
      let userSubmission = this.addCar.value
      this.cars.push(userSubmission)
      console.log(userSubmission);
  }
}

}