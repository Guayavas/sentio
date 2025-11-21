import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any = {
    full_name: '',
    email: '',
    phone: '',
    student_id: ''
  };

  isEditing = false;

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    const userId = this.authService.getUserId();
    if (userId) {
      this.userService.getUser(userId).subscribe({
        next: (data) => {
          this.userData = data;
        },
        error: (err) => console.error(err)
      });
    }
  }

  enableEdit() {
    this.isEditing = true;
  }

  saveChanges() {
    const userId = this.authService.getUserId();
    if (userId) {
      this.userService.updateUser(userId, this.userData).subscribe({
        next: (res) => {
          console.log('Updated:', res);
          this.isEditing = false;
          alert('Perfil actualizado correctamente');
        },
        error: (err) => {
          console.error(err);
          alert('Error al actualizar');
        }
      });
    }
  }
}
