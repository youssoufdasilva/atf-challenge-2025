import { Icons, AftLogoWrapper } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

// export const runtime = "edge";
// commented out because I got this error when deploying to vercel:
// Error: The Edge Function "og" size is 1.02 MB and your plan size limit is 1 MB. Learn More: https://vercel.link/edge-function-size

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title") || siteConfig.description;
  const font = fetch(
    new URL("../../assets/fonts/Inter-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          // set background image if needed
          backgroundImage: `url(${siteConfig.url}/og.png)`,
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            top: "125px",
          }}
        >
          <AftLogoWrapper className="h-16 w-16" />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "64px",
              fontWeight: "600",
              marginTop: "24px",
              textAlign: "center",
              width: "80%",
              letterSpacing: "-0.05em", // Added tighter tracking
            }}
          >
            {postTitle}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "16px",
              fontWeight: "500",
              marginTop: "16px",
              color: "#808080",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        <img
          src={`${siteConfig.url}/dashboard.png`}
          width={900}
          style={{
            position: "relative",
            bottom: -160,
            aspectRatio: "auto",
            border: "4px solid lightgray",
            background: "lightgray",
            borderRadius: 20,
            zIndex: 1,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
