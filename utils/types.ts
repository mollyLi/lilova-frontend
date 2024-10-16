export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type ProductCardProps = {
  id: string;
  name: string;
  brand?: string;
  condition?: string;
  category?: string;
  image: string;
  description: string;
  price: number | null;
  size?: string;
  gender?: number;
};
