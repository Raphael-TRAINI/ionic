import { NgModule } from '@angular/core';
import { DeepLinkModule } from '../../../../../..';

import { ModalFirstPage } from './modal-first';

@NgModule({
  declarations: [
    ModalFirstPage,
  ],
  imports: [
    DeepLinkModule.forChild(ModalFirstPage)
  ],
  entryComponents: [
    ModalFirstPage,
  ]
})
export class ModalFirstPageModule {}