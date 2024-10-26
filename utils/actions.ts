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

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error('You must be logged in to access this route');
  }
  if (!user.privateMetadata.hasProfile) redirect('/profile/create');
  return user;
};

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
    const user = await getAuthUser();
    try {
      const rawData = Object.fromEntries(formData);
      const imageFiles: File[] | FormDataEntryValue[] = formData.getAll('images');
      // console.log('imageFiles',  imageFiles)
      const validatedFields = validateWithZodSchema(productSchema, rawData);
      validatedFields.brandId = +validatedFields.brandId;
      const uploadImagesPaths: string[] = [];

      const uploadAllImages = async () => {
        const uploadPromises = imageFiles?.map(async file => {          
          const validatedFile = validateWithZodSchema(imageSchema, { image: file });
          const fullPath = await uploadImage(validatedFile.image);
          
          // console.log('fullPath', fullPath);
          return fullPath;  // Return the path instead of directly pushing it
        });

        // Wait for all uploads to complete
        const results = await Promise.all(uploadPromises);
        
        // Once all images are uploaded, push the results to `uploadImagesPaths`
        uploadImagesPaths.push(...results);
      };

      await uploadAllImages();

      await db.product.create({
        data: {
          ...validatedFields,
          category: '',
          image: uploadImagesPaths[0],
          images: uploadImagesPaths,
          profileId: user.id,
          source: '',
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
      orderBy: {
        name: 'asc'
      }
    })
    return brands;
  }

  export const fetchProducts = async () => {
    const products = await db.product.findMany({
      select: {
        id: true,
        image: true,
        name: true,
        origPrice: true,
        price: true,
        size: true,
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
      include: {
        brand: true,
        profile: true,
      }
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