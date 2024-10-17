export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type ProfileProps = {
  id: string;
  username: string;
}

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
  source: string;
  profile: ProfileProps;
};

export type BrandProps = {
  id: string;
  description?: string;
  logo?: string;
  name: string;
  website?: string;
}
