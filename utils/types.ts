export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type ProductCardProps = {
  image: string;
  id: string;
  name: string;
  brand?: string;
  size?: string;
  price: number;
};
