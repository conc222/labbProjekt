export class Fotspelare {

  // tslint:disable-next-line:variable-name
  constructor(private _name?: string, private _age?: number, private _nummer?: number, private _land?: string, private _position?: number, private _bild?: string) {}

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

  get land(): string {
    return this._land;
  }

  set land(value: string) {
    this._land = value;
  }

  get position(): number {
    return this._position;
  }

  set position(value: number) {
    this._position = value;
  }

  get nummer(): number {
    return this._nummer;
  }

  set nummer(value: number) {
    this._nummer = value;
  }

  get bild(): string {
    return this._bild;
  }

  set bild(value: string) {
    this._bild = value;
  }
}
