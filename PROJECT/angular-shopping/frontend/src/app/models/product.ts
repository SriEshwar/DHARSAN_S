export interface Product {
  _id: string;
    name: string;
    price: number;
    image: string;
    rating?: number;
    ratings?: Rating[];
    quantity?: number;
    category : string;
    description : string;
    specification : string[];
    highlight : string[];
    reviews?: Review[];
    averageRating?: number;
  }

  export interface Rating {
    userId: string;
    rating: number;
  }
  
  export interface Review {
    userId: string;
    review: string;
  }

  export interface Order {
    _id: string;
    userId: string;
    products: {
      productId: Product;
      quantity: number;
    }[];
    deliveryDate: Date;
    canBeCanceled?: boolean;
    isDelivered?:boolean;
  }