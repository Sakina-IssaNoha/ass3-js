class Mkulima{
    constructor(){
    this.farms = [];
    this.groceryVendor = [];
    this.product = [];
    this.addFarm = (farmId, farmName, farmer, phone, address) => {
    this.farms.push({farmId,farmName,farmer,phone,address})
    }
    this.removeFarm = (farmId) => {
    let main = this.farms.find(item => item.farmId ===farmId);
    let farmIndex = this.farms.indexOf(main);
    this.farms.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let particularFarm = this.farms.find(item => item.farmId ===farmId)
    particularFarm.farmId =newFarmId;
    particularFarm.farmName =newFarmName;
    particularFarm.farmer =newFarmerName;
    particularFarm.phone =newPhone;
    particularFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
    
    }
    this.removeProduct = (productId) => {
    let particular = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(particular);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let particularProduct = this.product.find(item => item.productId ===productId)
    particularProduct.productId =newProductId;
    particularProduct.productName = newProductName;
    particularProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProducts = ()=>{
    console.log(this.product)
    }
    this.calOrderPrice = (productId,quantity)=>{
    let particularProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${particularProduct.productName} for KES ${quantity*particularProduct.price}`);
    }
    }
    }
    
    let farm2 = new Mkulima();
    farm2.addFarm("467","Serah","Safari","456789021", "Kd46");
    farm2.addFarm("021","Samia","Mahdi","077802356", "Kcf467");
    farm2.addFarm("679","Ali","Karim","07578936", "Kgv569");
    console.log(farm1.farms);
    
    farm2.removeFarm("021");
    console.log()