import { Component } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrl: './teachers-list.component.css'
})
export class TeachersListComponent {
  tutorials?: Tutorial[];
  // name = '';

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll().subscribe({
      next: (tutorial: Tutorial[]) => {
        this.tutorials = tutorial;
        console.log(tutorial);
      },
      error: (e) => console.error(e)
    });
  }
}