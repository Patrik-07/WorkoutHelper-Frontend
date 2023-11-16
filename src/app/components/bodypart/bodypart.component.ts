import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bodypart } from 'src/app/models/Bodypart';
import { BodypartService } from '../../services/bodypart/bodypart.service';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-bodypart',
  templateUrl: './bodypart.component.html',
  styleUrls: ['./bodypart.component.scss'],
})
export class BodypartComponent implements OnInit {
  bodypart!: Bodypart;

  constructor(
    private route: ActivatedRoute,
    private bodypartService: BodypartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let bodypartName = params['name'];
      this.bodypartService.getBodypartByName(bodypartName).subscribe({
        next: (response) => {
          this.bodypart = response;
          this.bodypart.imageURL = `${environment.apiURL}/images/bodyparts/${this.bodypart.name}.svg`;
          console.log(this.bodypart);
        },
        error: (error) => {
          console.log(error);
        },
      });
    });
  }
}
