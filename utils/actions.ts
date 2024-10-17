'use server';

import {
  imageSchema,
  profileSchema,
  productSchema,
  validateWithZodSchema,
} from './schemas';
import db from './db';
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';
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

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error('Please login to create a profile');

    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? '',
        ...validatedFields,
      },
    });
    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect('/');
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
          ...validatedFields,
          brandId: 'cm2cy8i2f00010cmg5ri61yso',
          category: '',
          condition: '',
          gender: '',
          image: fullPath,
          size: '',
          origPrice: 4000,
          profileId: 'user_2nVvtoFOmFm3w8sPtbYFePjl5ZI',
          source: ''
        },
      });
    } catch (error) {
      return renderError(error);
    }
  redirect('/');
  };

  export const fetchBrands = async () => {
    const brands = await db.brand.findMany({
      select: {
        id: true,
        name: true,
      },
      // orderBy: {
      //   name: 'asc'
      // }
    })
    return brands;
  }

  export const fetchProducts = async () => {
    // const user = await getAuthUser();
    const products = await db.product.findMany({
      select: {
        id: true,
        // brand: true,
        condition: true,
        category: true,
        image: true,
        name: true,
        origPrice: true,
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

  export const fetchProfileImage = async () => {
    const user = await currentUser();
    if (!user) return null;
  
    const profile = await db.profile.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        profileImage: true,
      },
    });
  
    return profile?.profileImage;
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