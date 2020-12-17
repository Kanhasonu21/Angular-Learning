import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-basic-things",
  templateUrl: "./basic-things.component.html",
  styleUrls: ["./basic-things.component.css"],
})
export class BasicThingsComponent implements OnInit {
  string1: number = 100;
  string2: string = "bucks";
  isdisabled: boolean = false;
  howManyMoney() {
    return this.string1;
  }

  constructor() {
    setTimeout(() => {
      this.isdisabled = true;
    }, 2000);
  }
  ngOnInit() {}
}
