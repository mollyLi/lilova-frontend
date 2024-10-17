export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type ProductCardProps = {
  id: string;
  brand?: string;
  category?: string;
  condition?: string;
  description: string;
  gender?: number;
  image: string;
  name: string;
  price: number | null;
  size?: string;
};
