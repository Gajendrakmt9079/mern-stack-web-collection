export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  avatar: string;
}