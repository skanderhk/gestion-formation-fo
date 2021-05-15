import { AuthGuard } from './guards/auth.guard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule],
  providers: [
    AuthGuard
  ]
})
export class CoreModule {}
