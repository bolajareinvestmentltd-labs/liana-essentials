import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);
