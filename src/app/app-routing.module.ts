import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LookupNameComponent } from './lookup-name/lookup-name.component';
import { RecordNameComponent } from './record-name/record-name.component';

const routes: Routes = [
  {path: 'lookupName', component: LookupNameComponent},
  {path: 'recordName', component: RecordNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
