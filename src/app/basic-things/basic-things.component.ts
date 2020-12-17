import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-basic-things",
  templateUrl: "./basic-things.component.html",
  styleUrls: ["./basic-things.component.css"],
})
export class BasicThingsComponent {
  string1: number = 100;
  string2: string = "bucks";

  howManyMoney(){
    return this.string1;
  }
}
