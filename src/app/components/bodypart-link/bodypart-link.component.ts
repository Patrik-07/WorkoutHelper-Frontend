import { Component, Input } from '@angular/core';
import { Bodypart } from 'src/app/models/Bodypart';

@Component({
  selector: 'app-bodypart-link',
  templateUrl: './bodypart-link.component.html',
  styleUrls: ['./bodypart-link.component.scss'],
})
export class BodypartLinkComponent {
  @Input() bodypart!: Bodypart;
}
