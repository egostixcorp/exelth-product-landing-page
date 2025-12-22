

import { API_URL_V1 } from "@/const/URL";
import FacilityProfileId from "@/components/App/Pages/FacilityProfileClientPage";

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(`${API_URL_V1}/public-facilities`, {
      // next: { revalidate: 3600 }, // cache for 1 hour
    });

    if (!res.ok) throw new Error("Failed to fetch facility");
    const facilityRes = await res.json();
    const facility = facilityRes.find((item) => item.id === params.facilityID);

    const title = facility?.name
      ? `${facility.name} | Exelth`
      : "Healthcare Facility | Exelth";

    const description =
      facility?.location?.address ||
      "Explore trusted healthcare facilities and book appointments with ease on Exelth.";

    const coverPhoto =
      facility?.cover_photo ||
      "https://exelth.com/defaults/facility-og-default.jpg";

    const url = `https://exelth.com/search/facility/profile/${params.facilityID}`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        siteName: "Exelth",
        images: [
          {
            url: coverPhoto,
            width: 1200,
            height: 630,
            alt: `${facility?.name || "Facility"} cover photo`,
          },
        ],
        locale: "en_IN",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [coverPhoto],
      },
      alternates: {
        canonical: url,
      },
    };
  } catch (err) {
    console.error("Metadata generation failed:", err);
    return {
      title: "Exelth | Find Healthcare Facilities",
      description:
        "Discover healthcare facilities and book appointments easily on Exelth.",
    };
  }
}

export default function Page({ params }) {
  return <FacilityProfileId params={params} />;
}
