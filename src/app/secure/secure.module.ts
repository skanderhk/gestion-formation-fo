import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecureComponent } from './secure.component';
import { SecureRoutingModule } from './secure-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SecureComponent],
  imports: [CommonModule, SecureRoutingModule, SharedModule],
})
export class SecureModule {}
