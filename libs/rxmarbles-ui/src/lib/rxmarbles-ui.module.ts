import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarbelComponent } from './general/marbel/marbel.component';
import { ChainComponent } from './general/chain/chain.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MarbelComponent, ChainComponent],
  exports: [MarbelComponent, ChainComponent]
})
export class RxmarblesUiModule {}
