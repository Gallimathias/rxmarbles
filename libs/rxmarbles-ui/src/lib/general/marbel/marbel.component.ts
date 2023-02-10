import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { MarbelPosition } from './position';

@Component({
  selector: 'rxmarbles-x-marbel',
  templateUrl: './marbel.component.html',
  styleUrls: ['./marbel.component.scss'],
})
export class MarbelComponent implements AfterViewInit {
  @ViewChild('marbel') marbel?: ElementRef<HTMLDivElement>;
  @Input() maxPosition?: number;
  @Input() minPosition: number = 0;
  @Input() parentElement?: HTMLElement;

  private readonly position: MarbelPosition = { x: 0, y: 0 };

  ngAfterViewInit(): void {
    if (this.marbel) {
      this.dragElement(this.marbel.nativeElement);
    }
  }

  dragElement(element: HTMLElement): void {
    let max;
    if (!this.maxPosition && !this.parentElement) {
      max = undefined;
    } else if (!this.maxPosition) {
      max = this.parentElement!.clientWidth;
    } else if (!this.parentElement) {
      max = this.maxPosition;
    } else {
      max = Math.max(this.maxPosition, this.parentElement.clientWidth);
    }

    const minPos = Math.min(this.minPosition, 0);
    const maxPos = max;
    const position: MarbelPosition = this.position;

    element.onmousedown = startDrag;

    function startDrag(e: MouseEvent) {
      e.preventDefault();

      position.x = e.clientX;
      position.y = e.clientY;

      document.onmouseup = stopDrag;
      document.onmousemove = move;
    }

    function move(e: MouseEvent) {
      e.preventDefault();

      const posX = position.x;
      const posY = position.y;

      const pos1 = posX - e.clientX;
      const pos2 = posY - e.clientY;

      position.x = e.clientX;
      position.y = e.clientY;

      const leftPixel = element.offsetLeft - pos1;

      if (leftPixel < minPos || (maxPos && (leftPixel + element.clientWidth) > maxPos)) return;

      // element.style.top = element.offsetTop - pos2 + 'px';
      element.style.left = element.offsetLeft - pos1 + 'px';
    }

    function stopDrag(e: MouseEvent) {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
