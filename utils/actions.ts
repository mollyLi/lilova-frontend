'use server';

// import {
//   imageSchema,
//   profileSchema,
//   propertySchema,
//   validateWithZodSchema,
//   createReviewSchema,
// } from './schemas';
// import db from './db';
// import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { uploadImage } from './supabase';
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
    //   const file = formData.get('image') as File;
      console.log(rawData);
  
    //   const validatedFields = validateWithZodSchema(propertySchema, rawData);
    //   const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    //   const fullPath = await uploadImage(validatedFile.image);
      return { message: 'product created.' }
    //   await db.property.create({
    //     data: {
    //       ...validatedFields,
    //       image: fullPath,
    //     },
    //   });
    } catch (error) {
      return renderError(error);
    }
    // redirect('/');
  };

  // export const fetchRentals = async () => {
  //   const user = await getAuthUser();
  //   const rentals = await db.property.findMany({
  //     where: {
  //       profileId: user.id,
  //     },
  //     select: {
  //       id: true,
  //       name: true,
  //       price: true,
  //     },
  //   });
  
  //   const rentalsWithBookingSums = await Promise.all(
  //     rentals.map(async (rental) => {
  //       const totalNightsSum = await db.booking.aggregate({
  //         where: {
  //           propertyId: rental.id,
  //           paymentStatus: true,
  //         },
  //         _sum: {
  //           totalNights: true,
  //         },
  //       });
  
  //       const orderTotalSum = await db.booking.aggregate({
  //         where: {
  //           propertyId: rental.id,
  //           paymentStatus: true,
  //         },
  //         _sum: {
  //           orderTotal: true,
  //         },
  //       });
  
  //       return {
  //         ...rental,
  //         totalNightsSum: totalNightsSum._sum.totalNights,
  //         orderTotalSum: orderTotalSum._sum.orderTotal,
  //       };
  //     })
  //   );
  
  //   return rentalsWithBookingSums;
  // };
  
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