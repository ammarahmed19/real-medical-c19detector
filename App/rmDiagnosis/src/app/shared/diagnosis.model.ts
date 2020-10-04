export class Diagnosis {
  public id: number;
  public diagName: string;
  public diseases: string[];
  public risks: number[];
  public imageSrc: string;

  constructor(id: number, diagName: string, diseases: string[], risks: number[], imageSrc: string) {
      this.id = id;
      this.diagName = diagName;
      this.diseases = diseases;
      this.risks = risks;
      this.imageSrc = imageSrc;
  }
}
