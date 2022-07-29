import Product from "./Product";
export default class Detail extends Product {
  constructor() {
    super();
    this.id = id;
    this.name = name;
    this.alias = alias;
    this.latitude = latitude;
    this.longtitude = longtitude;
    this.description = description;
    this.image = image;
    this.deleted = deleted;
  }
  deleted = "";
  size = [];
  shortDescription = "";
  quantity = "";
  categories = [];
  relatedProducts = [];
  dateTime = "";
}
