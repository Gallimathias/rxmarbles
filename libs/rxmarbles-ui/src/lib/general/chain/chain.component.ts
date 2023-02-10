import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'rxmarbles-x-chain',
  templateUrl: './chain.component.html',
  styleUrls: ['./chain.component.scss'],
})
export class ChainComponent {
  
  constructor(){
    const funcCode = "return 'test'";
    const func = new Function('x', funcCode) as (x: number) => string;
    of(0).pipe(map(func)).subscribe(s => console.log(s));
  }

  
}
