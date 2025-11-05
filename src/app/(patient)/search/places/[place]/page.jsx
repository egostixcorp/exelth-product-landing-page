import React from "react";
import PlacesClientPage from "../../../../../components/App/Pages/PlacesClientPage";
// Generate dynamic metadata based on the place slug
export async function generateMetadata({ params }) {
  const { place } = params;

  // You could optionally fetch place details here from your API or Supabase
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/places/${place}`);
  // const data = await res.json();

  const formattedPlace = decodeURIComponent(place)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: `${formattedPlace} `,
    description: `Discover detailed information, reviews, and services available at ${formattedPlace}.`,
    openGraph: {
      title: `${formattedPlace}`,
      description: `Explore ${formattedPlace} on Exelth — view details, nearby doctors, facilities, and services.`,
      url: `https://exelth.com/places/${place}`,
      siteName: "Exelth",
      images: [
        {
          url: `https://exelth.com/og/places/${place}.png`,
          width: 1200,
          height: 630,
          alt: `${formattedPlace} preview`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedPlace}`,
      description: `Learn more about ${formattedPlace} and book appointments instantly.`,
      images: [`https://exelth.com/og/places/${place}.png`],
    },
  };
}
const page = ({ params }) => {
  const { place } = params;

  return (
    <div className="flex min-h-screen w-full items-start justify-center">
      <PlacesClientPage placeName={place} />
    </div>
  );
};

export default page;
