import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { emailValidator } from 'src/app/core/validators/email.directive';
import { Controls } from '../../shared/interface/register-controls.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfileForm: FormGroup
  controls: Controls
  isProfilePage = true

  constructor(private formBuilder: FormBuilder, private activateRoute: ActivatedRoute) {
    this.userProfileForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [emailValidator]]
    })
    this.controls = {
      name: this.userProfileForm.get("name"),
      email: this.userProfileForm.get("email")
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
    console.log("Triggered")
  }

  updateProfile() {

  }

  profilePage() {
    this.controls.name?.disable()
    this.controls.email?.disable()
  }

  updatePage() {

  }
}
