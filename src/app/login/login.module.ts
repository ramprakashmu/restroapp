import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { TestapiService } from './testapi.service';



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule
  ],
  providers:[TestapiService]
})
export class LoginModule { }
