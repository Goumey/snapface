export class FaceSnap {
  location?: string;
  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,

    public snaps: number = 0,
    public createdAt: Date
  ) {}
  onAddSnap() {
    this.snaps++;
  }
  onRemoveSnap() {
    this.snaps--;
  }
  setLocation(location: string) {
    this.location = location;
  }
}
