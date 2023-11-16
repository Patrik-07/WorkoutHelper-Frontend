import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { Bodypart } from 'src/app/models/Bodypart';
import { BodypartService } from 'src/app/services/bodypart/bodypart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  bodyparts: Bodypart[];
  title = 'WorkoutHelperFrontEnd';

  constructor(private bodypartService: BodypartService) {
    this.bodyparts = [];
  }

  ngOnInit(): void {
    this.getBodyparts();
  }

  getBodyparts() {
    this.bodypartService.getBodyparts().subscribe({
      next: (response) => {
        this.bodyparts = response;
        for (var bodypart of this.bodyparts) {
          bodypart.imageURL = `${environment.apiURL}/images/bodyparts/${bodypart.name}.svg`;
        }
        console.log(this.bodyparts);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
