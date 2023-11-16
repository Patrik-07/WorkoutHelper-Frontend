import { environment } from '../environments/environment';

export class Bodypart {
  id: number;
  name: string;
  description: string;
  imageURL: string;

  constructor(id: number, name: string, description: string) {
    console.log('asd');
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageURL = `${environment.apiURL}/images/bodyparts/${this.name}.svg`;
  }

  public setImageURL(): void {
    this.imageURL = `${environment.apiURL}/images/bodyparts/${this.name}.svg`;
  }
}
