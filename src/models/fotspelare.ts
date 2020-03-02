export class Fotspelare {

  // tslint:disable-next-line:variable-name max-line-length
  constructor(private _name?: string, private _age?: number, private _personnr?: number, _land?: string, _position?: string, _nummer?: number) {}


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get personnr(): number {
    return this._personnr;
  }

  set personnr(value: number) {
    this._personnr = value;
  }

  get land(): string {
    return this._land;
  }

  set land(value) {
    this.land = value;
  }

  get position() {
    return this._position;
  }

  set position(value: string) {
    this.position = value;
  }

  get nummer() {
    return this._nummer;
  }

  set nummer(value: number) {
    this.nummer = value;
  }
}
