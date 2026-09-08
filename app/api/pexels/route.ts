import { searchPexelsPhotos } from "@/lib/pexels";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const perPage = searchParams.get("perPage");

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 },
    );
  }

  try {
    const photos = await searchPexelsPhotos(
      query,
      perPage ? parseInt(perPage) : 15,
    );
    return NextResponse.json({ photos });
  } catch (error) {
    console.error("Pexels API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch photos from Pexels" },
      { status: 500 },
    );
  }
}
