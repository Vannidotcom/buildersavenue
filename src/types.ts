export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}