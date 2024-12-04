export interface loginDetails{
    loginEmail:string|undefined
    loginPassword:string
}
export interface signUpDetails{
    userName:String
    userEmail:String
    userPhone:String
    userPassword:String
}
export interface productDet{
    productid:number,
    productName:string,
    prductCat:string,
    productRating:number,
    productImg:string,
    productPrice:number
}



export interface productDeatialsfirst {

    Phone:productDet[]
}