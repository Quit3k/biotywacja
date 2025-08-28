// src/sanityClient.ts

import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'msnddb47', // Wklej tutaj swoje projectId
  dataset: 'production',
  apiVersion: '2024-08-16', // Użyj aktualnej daty w formacie YYYY-MM-DD
  useCdn: true, // `false` jeśli chcesz zawsze najświeższe dane, `true` dla lepszej wydajności
});