import { createClient } from '@supabase/supabase-js';
//@ts-ignore
import heicConvert from 'heic-convert';

const bucket = 'temp';

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

const supabase = createClient(url, key);

export const convertHeicToJpg = async (file: File): Promise<File> => {
  if (file.type !== 'image/heic' && !file.name.endsWith('.heic')) {
    return file; // Return the original file if it's not a .heic file
  }

  console.log('HEIC file detected. Converting...');

  const buffer = await file.arrayBuffer();
  const outputBuffer = await heicConvert({
    buffer: Buffer.from(buffer),
    format: 'JPEG',
    quality: 1
  });

  // Create a new File object with the converted data
  const blob = new Blob([outputBuffer], { type: 'image/jpeg' });
  const newName = `${Date.now()}-${file.name.replace('.heic', '.jpg')}`;
  return new File([blob], newName, { type: 'image/jpeg' });
};

export const uploadImage = async (file: File): Promise<string> => {
  try {
    // Convert the image if it's a .heic file
    const convertedImage = await convertHeicToJpg(file);
    // TODO: compress image

    const timestamp = Date.now();
    const newFileName = `${timestamp}-${convertedImage.name}`;
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(newFileName, convertedImage, {
        contentType: 'image/jpeg',  // Set the correct content type
        cacheControl: '3600',  // Optional: set cache control headers
      });

    if (error || !data) {
      throw new Error('Image upload failed: ' + error.message);
    }

    const { publicUrl } = supabase.storage
      .from(bucket)
      .getPublicUrl(newFileName)
      .data;

    return publicUrl;

  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
