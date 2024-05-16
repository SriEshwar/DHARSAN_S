export class Shop{
    shopName : String;
    shopId:number;
    location:String;

    constructor(shopName : String,
        shopId:number,
        location:String
    ){
        this.shopName=shopName;
        this.shopId=shopId;
        this.location=location;
    }
}