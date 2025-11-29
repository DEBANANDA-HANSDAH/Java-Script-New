//classes
class Mahindracar
{
  constructor(brand,mileage)
  {
    console.log("creating new object");
    this.brand=brand;
    this.mileage=mileage;
  }
  start()
  {
    console.log("start");
  }

  stop()
  {
    console.log("stop");
  }
}
let Tharrox=new Mahindracar("Tharrox",10);
let S11=new Mahindracar("S11",12);
