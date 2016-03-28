class House {
  constructor() {
    this.couch = new Couch();
    this.table = Tables.getInstance();
    this.chairs = app.get('chairs');
  }
}
