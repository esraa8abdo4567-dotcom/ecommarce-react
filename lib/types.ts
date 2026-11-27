export type Product={_id:string;title:string;description:string;imageCover:string;price:number;ratingsAverage:number;category?:{name:string};images?:string[]};
export type Collection={_id:string;name:string;image:string};
export type Cart={_id:string;totalCartPrice:number;products:{product:Product;count:number;price:number}[]};
export type Order={_id:string;id:number;totalOrderPrice:number;isPaid:boolean;isDelivered:boolean};
