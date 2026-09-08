import type {
  PexelsPhoto,
  ProcessedPexelsPhoto,
  PexelsSearchResponse,
} from "@/types/pexels";

const PEXELS_API_URL = "https://api.pexels.com/v1";
const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

export async function searchPexelsPhotos(
  query: string,
  perPage: number = 15,
): Promise<ProcessedPexelsPhoto[]> {
  if (!PEXELS_API_KEY) {
    console.warn("PEXELS_API_KEY is not set");
    return [];
  }

  try {
    const response = await fetch(
      `${PEXELS_API_URL}/search?query=${encodeURIComponent(query)}&per_page=${perPage}&page=1`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    );

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.statusText}`);
    }

    const data: PexelsSearchResponse = await response.json();

    return data.photos.map((photo: PexelsPhoto) => ({
      id: photo.id,
      alt: photo.alt,
      photographer: photo.photographer,
      src: {
        large: photo.src.large,
        large2x: photo.src.large2x,
        portrait: photo.src.portrait,
        landscape: photo.src.landscape,
      },
    }));
  } catch (error) {
    console.error("Failed to fetch Pexels photos:", error);
    return [];
  }
}

// Get photos for different sections
export async function getHeroPhotos(): Promise<ProcessedPexelsPhoto[]> {
  return searchPexelsPhotos(
    "luxury wedding ceremony elegant flowers romance",
    1,
  );
}

export async function getAboutPhotos(): Promise<ProcessedPexelsPhoto[]> {
  return searchPexelsPhotos(
    "luxury editorial wedding styling aesthetic minimal",
    1,
  );
}

export async function getProjectPhotos(): Promise<ProcessedPexelsPhoto[]> {
  return searchPexelsPhotos("high end wedding editorial luxury decoration", 8);
}

export async function getCollaborationPhotos(): Promise<
  ProcessedPexelsPhoto[]
> {
  return searchPexelsPhotos("luxury wedding flowers white roses elegant", 1);
}
