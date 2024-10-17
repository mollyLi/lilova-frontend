'use server';

import {
  imageSchema,
  productSchema,
  validateWithZodSchema,
} from './schemas';
import db from './db';
// import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';
// import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { uploadImage } from './supabase';
// import { calculateTotals } from './calculateTotals';
// import { formatDate } from './format';

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'An error occurred',
  };
};

export const createProductAction = async (
    prevState: any,
    formData: FormData
  ): Promise<{ message: string }> => {
    try {
      const rawData = Object.fromEntries(formData);
      const file = formData.get('image') as File;
      console.log(rawData);
  
      const validatedFields = validateWithZodSchema(productSchema, rawData);
      const validatedFile = validateWithZodSchema(imageSchema, { image: file });
      const fullPath = await uploadImage(validatedFile.image);

      await db.product.create({
        data: {
          brand: '',
          condition: '',
          category: '',
          // image: '',
          size: '',
          gender: '',
          ...validatedFields,
          image: fullPath,
        },
      });
    } catch (error) {
      return renderError(error);
    }
  redirect('/');
  };

  export const fetchProducts = async () => {
    // const user = await getAuthUser();
    const products = await db.product.findMany({
      select: {
        id: true,
        brand: true,
        condition: true,
        category: true,
        image: true,
        name: true,
        price: true,
        description: true,
        size: true,
        gender: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
  
    return products;
  };

  export const fetchProductDetails = (id: string) => {
    return db.product.findUnique({
      where: {
        id,
      },
    });
  };
  
  // export async function deleteRentalAction(prevState: { propertyId: string }) {
  //   const { propertyId } = prevState;
  //   const user = await getAuthUser();
  
  //   try {
  //     await db.property.delete({
  //       where: {
  //         id: propertyId,
  //         profileId: user.id,
  //       },
  //     });
  
  //     revalidatePath('/rentals');
  //     return { message: 'Rental deleted successfully' };
  //   } catch (error) {
  //     return renderError(error);
  //   }
  // }