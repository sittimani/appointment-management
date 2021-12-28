import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatchValidator } from 'src/app/core';
import { emailValidator } from 'src/app/core/validators/email.directive';
import { UserCreditional } from '../../shared/interface/auth.interface';
import { Controls } from '../../shared/interface/register-controls.interface';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfileForm: FormGroup
  controls: Controls
  isProfilePage = true

  constructor(
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {
    this.userProfileForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [emailValidator]],
      confirmEmail: ['']
    }, { validators: MatchValidator("email", "confirmEmail") })
    this.controls = {
      name: this.userProfileForm.get("name"),
      email: this.userProfileForm.get("email"),
      confirmEmail: this.userProfileForm.get("confirmEmail")
    }
  }

  ngOnInit(): void {
    this.activateRoute.data.subscribe(result => {
      this.userProfileForm.patchValue(result.user)
    })
    const url = location.href
    if (url.includes("my-profile"))
      return this.profilePage()
    this.isProfilePage = false
    return this.updatePage()
  }

  triggerUpdateProfileForm() {
    this.router.navigate(["update-profile"])
  }

  updateProfile() {
    if (this.userProfileForm.touched && this.userProfileForm.valid) {
      let value = this.userProfileForm.value
      delete value.confirmEmail
      this.updateUserDetails(value)
    }
  }

  updateUserDetails(value: UserCreditional) {
    this.authService.updateProfile(value).subscribe(result => {
     this.toastrService.success(result)
     this.router.navigate(["login"])
    })
  }

  profilePage() {
    console.log("called profile page")
    this.controls.name?.disable()
    this.controls.email?.disable()
  }

  updatePage() {
    this.authService.getUserDetails().subscribe(result => {
      this.userProfileForm.patchValue(result)
      this.controls.confirmEmail?.setValue(result.email)
    })
  }
}
