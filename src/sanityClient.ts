// src/sanityClient.ts

import { createClient } from '@sanity/client';

export default createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'msnddb47',
  dataset: 'production',
  apiVersion: '2024-08-16', // Użyj aktualnej daty w formacie YYYY-MM-DD
  useCdn: false,// `false` jeśli chcesz zawsze najświeższe dane, `true` dla lepszej wydajności
});