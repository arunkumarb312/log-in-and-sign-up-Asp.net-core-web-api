import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public Service: UserService) { }

  ngOnInit():void{
    this.Service.formModel.reset();

  }
onSubmit()
  {
    this.Service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.Service.formModel.reset();
        } else {
          res.errors.forEach((element: { code: any; }) => {
            switch (element.code) {
              case 'DuplicateUserName':
                break;

              default:
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
  
