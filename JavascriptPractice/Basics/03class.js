class Product{
    constructor(name,price,brand){
     this.pname=name
     this.pcost=price
     this.pbrand=brand
    }
    
    producDetail(){
        //return this.pname+"|"+this.pbrand+"|"+this.pcost
        return `${this.pname}|${this.pbrand}|${this.pcost}`
    }

}

let p1=new Product("laptop",40000,"dell")
console.log(p1)

let p2=new Product("Mobile",50000,"apple")
console.log(p2)

console.log(p2.producDetail())


class ElectronicsProduct extends Product
{
    constructor(name,price,brand,power,starrating)
    {
        super(name,price,brand)
        this.power_cons=power
        this.power_rating=starrating
    }

    productFulldetail(){
        return `${this.producDetail()}|${this.power_cons}wz|${this.power_rating}`
    }

}

let e1=new ElectronicsProduct("Tv",70000,"sony",1000,4)
console.log(e1)
console.log(e1.productFulldetail())


class Apparel extends Product{
    constructor(name,price,brand,gender,size)
    {
    super(name,price,brand)
    this.gender=gender
    this.size=size
    }
    productFulldetail(){
        return `${this.producDetail()}|${this.gender}|${this.size}`
    }
}

let a1=new Apparel("Tshirt","uspolo",1000,"male","m")
console.log(a1.productFulldetail())