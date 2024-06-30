import { Component } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'app-add-teachers',
  templateUrl: './add-teachers.component.html',
  styleUrl: './add-teachers.component.css'
})
export class AddTeachersComponent {
  tutorial: Tutorial = {
    name: ''
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) {}

  saveTutorial(): void {
    const data = {
      name: this.tutorial.name,
    };

    this.tutorialService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      name: '',
    };
  }
}
