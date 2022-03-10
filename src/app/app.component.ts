import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  frutti: string[] = ['la banana', 'la fragola', 'la mela', 'la pera', 'il cocomero']

  out: string[] = this.frutti

  testo: string = ""

  

  ngOnInit(): void {
  }
  

  update(){

    this.out = []

    for (let x of this.frutti){
      if (x.search(this.testo) != -1){
        this.out.push(x)
      }
    }

    
  }

}
