import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import icSmartphone from '@iconify/icons-ic/twotone-smartphone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icMenu from '@iconify/icons-ic/twotone-menu';
import icCamera from '@iconify/icons-ic/twotone-camera';
import icPhone from '@iconify/icons-ic/twotone-phone';
import { FormControl } from '@angular/forms';
import { filter, map, startWith } from 'rxjs/operators';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { stagger60ms } from '../../../../@vex/animations/stagger.animation';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from "@angular/router";
import { Testmodel } from 'src/app/_models/Testmodel.model';
import { FormPageManageService} from './form-elements.service';
import { Observable, of, ReplaySubject } from 'rxjs';


import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { HttpResponse, HttpErrorResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'vex-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class FormElementsComponent implements OnInit {

  province = new FormControl();

  provinces : string[] = [
    "Southern Province",
    "Western Province",
    "North Central",
    "Northern",
    "North Western",
    "Sabaragamuwa"
  ]

 

// form: FormGroup;
// mode: 'create' | 'update' = 'create';
// queryParams : any;
// icMoreVert = icMoreVert;
// icClose = icClose;

// icPrint = icPrint;
// icDownload = icDownload;
// icDelete = icDelete;

// icPerson = icPerson;
// icMyLocation = icMyLocation;
// icLocationCity = icLocationCity;
// icEditLocation = icEditLocation;
// icPhone = icPhone;

constructor() {
}

ngOnInit() {
  
//   this.form = this.fb.group({
//   objectuuid: [ [], [Validators.required]],
// createdat: [ [], [Validators.required]],
// updatedat: [ [], [Validators.required]],
// deletedat: [ [], [Validators.required]]
// });
   
}



// save() {
//   const object = this.createSaveObject();
//   if(this.queryParams && this.queryParams.params) {
//     this.subscribeToSaveResponse(this.formService.save(object, this.queryParams.params));
//   } else {
//     this.subscribeToSaveResponse(this.formService.save(object, {}));
//   }
// }

 

// isCreateMode() {
//   return this.mode === 'create';
// }

// isUpdateMode() {
//   return this.mode === 'update';
// }

// protected onError(errorMessage: string) {
//   console.log(errorMessage);
//   this._snackBar.open('Error occured while saving!' , 'Close');
// }

// createSaveObject(){
//   let obj: Testmodel = {};
//   obj.objectuuid= this.form.get('objectuuid').value;
// obj.createdat= this.form.get('createdat').value;
// obj.updatedat= this.form.get('updatedat').value;
// obj.deletedat= this.form.get('deletedat').value;
//   return obj;
// }


// protected subscribeToSaveResponse(result: Observable<HttpResponse<Testmodel>>) {
//   result.pipe(
//       map((res: HttpResponse<Testmodel>) => res.body)
// ).subscribe(
//       (res: Testmodel) => {
//     console.log("object saved");
//     this._snackBar.open('Saved successfully!', 'Close');
//     this.form.reset();
//     Object.keys(this.form.controls).forEach(key => {
//       this.form.get(key).setErrors(null) ;
//     });
//   },
//   (res: HttpErrorResponse) => this.onError(res.message)

// );
// }


}
