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
  brand: string;
  category: string;
  condition: string;
  description: string;
  gender: string;
  image?: string;
  images?: string[];
  name: string;
  price: number | null;
  size: string;
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

export type CodeLabelProps = {
  code: string;
  label: string;
}

export type ConditionProps = {
  code: string;
  label: string;
}

