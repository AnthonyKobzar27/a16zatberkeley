import Image from "next/image";
import { Button } from "@/components/ui/button";

type Sponsor = {
  name: string;
  smallLogoSrc: string;
  description: string;
  mainImageSrc?: string; // when omitted, show gradient placeholder
};

type Track = {
  title: string;
  description: string;
  criteria: ReadonlyArray<string>;
  sponsors: ReadonlyArray<string>;
};

export default function Home(): React.ReactElement {
  const sponsors: ReadonlyArray<Sponsor> = [
    {
      name: "EigenLayer",
      smallLogoSrc: "/eigenlayer.webp",
      mainImageSrc: "/eigenlayer.webp",
      description:
        "Supporting builders from idea to scale, empowering founders to move fast.",
    },
    {
      name: "Polymarket",
      smallLogoSrc: "/polymarketlogo.webp",
      mainImageSrc: "/polymarketlogo.webp",
      description:
        "Supporting builders from idea to scale, empowering founders to move fast.",
    },
    {
      name: "Merit Systems",
      smallLogoSrc: "/meritlogo.jpeg",
      mainImageSrc: "/meritlogo.jpeg",
      description:
      "Supporting builders from idea to scale, empowering founders to move fast.",
    },
    {
      name: "NfX",
      smallLogoSrc: "/nfxlogo.png",
      mainImageSrc: "/nfxlogo.png",
      description:
      "Supporting builders from idea to scale, empowering founders to move fast.",
    },
    {
      name: "Anthropic",
      smallLogoSrc: "/anthropic.png",
      mainImageSrc: "/anthropic.png",
      description:
      "Pushing the boundaries of applied AI and developer tooling. Details to follow.",
    },
    {
      name: "Cursor",
      smallLogoSrc: "/cursorlogo.jpeg",
      mainImageSrc: "/cursorlogo.jpeg",
      description:
        "Leading the frontier in AI safety and aligned model research. Full reveal coming soon.",
    },
    {
      name: "Hyperbolic",
      smallLogoSrc: "/hyperlogo.jpg",
      mainImageSrc: "/hyperlogo.jpg",
      description:
      "Supporting builders from idea to scale, empowering founders to move fast.",
    },
    {
      name: "Interaction Co Ca",
      smallLogoSrc: "/icoompany.jpeg",
      mainImageSrc: "/icoompany.jpeg",
      description:
      "Supporting builders from idea to scale, empowering founders to move fast.",
    },
    {
      name: "a16z",
      smallLogoSrc: "/a16zlogo.jpg",
      mainImageSrc:  "/a16zlogo.jpg",
      description:
        "Supporting builders from idea to scale, empowering founders to move fast.",
    },
  ];

  const tracks: ReadonlyArray<Track> = [
    {
      title: 'consumer',
      description: 'Consumer apps that delight users and grow fast.',
      criteria: [
        'Demonstrate clear user value and retention loop',
        'Show a working prototype with at least one core flow',
      ],
      sponsors: ['merit systems'],
    },
    {
      title: 'prediction markets',
      description: 'Market-driven products for forecasting and information discovery.',
      criteria: [
        'Functional market mechanics (markets, liquidity, resolution)',
        'Demonstrate real or simulated activity and outcomes',
      ],
      sponsors: ['polymarket'],
    },
    {
      title: 'verifiable agents/systems',
      description: 'Agents/systems with transparent, verifiable execution or proofs.',
      criteria: [
        'Demonstrate verifiability (proofs, attestations, or audits)',
        'Quantify reliability, reproducibility, or trust improvements',
      ],
      sponsors: ['eigenlayer'],
    },
    {
      title: 'best product',
      description: 'Overall best product: polish, usefulness, and execution.',
      criteria: [
        'High-quality UX with a smooth end-to-end demo',
        'Clear articulation of impact and who benefits',
      ],
      sponsors: ['anthropic credits', 'a16z prize'],
    },
    {
      title: 'benefits while you hack',
      description: 'Perks and credits to accelerate your build during the hack.',
      criteria: [
        'Integrate at least one provided benefit into your workflow',
        'Show how the benefit concretely improved velocity or quality',
      ],
      sponsors: [
        'anthropic api credits',
        'cursor model credits',
        'poke at 10$ a month for brainstorming',
        'hyperbolic compute credits',
      ],
    },
  ];
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 pb-40">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8">
        {/* a16z Image */}
        <div className="flex justify-center">
          <Image
            src="/a16z5.png"
            alt="a16z logo"
            width={400}
            height={200}
            className="w-full max-w-md md:max-w-lg h-auto"
            priority
          />
        </div>

        {/* Body Text */}
        <div className="space-y-4 max-w-xl mx-auto">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Not for beginners. For the top 100 makers at Berkeley. If you make
            stuff happen, apply! Prizes are from top sponsors.
          </p>
        </div>

        {/* Apply Button */}
        <div className="flex justify-center">
          <Button
            asChild
            className="scale-150 rounded-none bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg font-semibold"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf-JnzyEhiOV02AyvI91v7GmKoTcDbZgu_HI6b5Bof11B2Cdg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </Button>
        </div>

        {/* Team Info */}
        <p className="text-sm max-w-sm mx-auto md:text-base text-gray-300">
          Form teams before hackathon. If you get in the rest of your team will
          be auto accepted.
        </p>

        {/* Judges Section */}
        <div className="space-y-12 pt-40 flex flex-col items-center text-start w-full">
          <h2 className="text-2xl md:text-7xl mb-20 font-mono uppercase font-bold text-white ">
            Judges
          </h2>

          {/* Judge 1 */}
          <div className="space-y-3 flex flex-col items-start w-full max-w-sm">
            <div className="flex flex-row gap-4 items-center">
              <h3 className="text-3xl md:text-4xl font-medium text-white">
                Saarth Shah
              </h3>
              <Image
                src="/yclogo.png"
                alt="Judge Saarth Shah"
                width={25}
                height={25}
                className="rounded-none mr-auto"
              />
            </div>
            <Image
              src="/logos/IMG_6275.png"
              alt="Judge Saarth Shah"
              width={350}
              height={350}
              className="rounded-none mr-auto"
            />
            <p className="text-sm md:text-base text-gray-300 text-left">
              Saarth Shah is the founder and CEO of Sixtyfour, a YC backed
              startup building AI research agents and a data orchestration
              platform that runs large scale people and company intelligence
              workflows for sales, recruiting, and marketing.
            </p>
          </div>

          {/* Judge 2 (placeholder) */}
          <div className="space-y-3 flex flex-col items-start w-full max-w-sm">
            <div className="flex flex-row gap-4 items-center">
              <h3 className="text-3xl md:text-4xl font-medium text-white">
                Revealed Oct 7th
              </h3>
              <Image
                src="/anthropic.png"
                alt="Judge placeholder"
                width={25}
                height={25}
                className="rounded-none mr-auto"
              />
            </div>
            <div
              className="w-[350px] h-[350px] rounded-none mr-auto"
              style={{
                background: "linear-gradient(135deg, #4b5563 0%, #9ca3af 100%)",
              }}
            />
            <p className="text-sm md:text-base text-gray-300 text-left">
              This judge will also be awesome.
            </p>
          </div>

          {/* Judge 3 (placeholder) */}
          <div className="space-y-3 flex flex-col items-start w-full max-w-sm">
            <div className="flex flex-row gap-4 items-center">
              <h3 className="text-3xl md:text-4xl font-medium text-white">
                Revealed Oct 8th
              </h3>
              <Image
                src="/openailogo.jpg"
                alt="Judge Taylor Kim"
                width={25}
                height={25}
                className="rounded-none mr-auto"
              />
            </div>
            <div
              className="w-[350px] h-[350px] rounded-none mr-auto"
              style={{
                background: "linear-gradient(135deg, #4b5563 0%, #9ca3af 100%)",
              }}
            />
            <p className="text-sm md:text-base text-gray-300 text-left">
              This judge will also be equally as awesome as the previous two.
            </p>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="space-y-12 pt-40 flex flex-col items-center text-start w-full">
          <h2 className="text-2xl md:text-7xl mb-20 font-mono uppercase font-bold text-white ">
            Sponsors
          </h2>

          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="space-y-3 flex flex-col items-start w-full max-w-sm"
            >
              <div className="flex flex-row gap-4 items-center">
                <h3 className="text-3xl md:text-4xl font-medium text-white">
                  {sponsor.name}
                </h3>
                <Image
                  src={sponsor.smallLogoSrc}
                  alt={`${sponsor.name} logo`}
                  width={25}
                  height={25}
                  className="rounded-none mr-auto"
                />
              </div>

              {sponsor.mainImageSrc ? (
                <Image
                  src={sponsor.mainImageSrc}
                  alt={`${sponsor.name} banner`}
                  width={350}
                  height={350}
                  className="rounded-none mr-auto"
                />
              ) : (
                <div
                  className="w-[350px] h-[350px] rounded-none mr-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, #4b5563 0%, #9ca3af 100%)",
                  }}
                />
              )}

              <p className="text-sm md:text-base text-gray-300 text-left">
                {sponsor.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tracks Section */}
        <div className="space-y-12 pt-40 flex flex-col items-center text-start w-full">
          <h2 className="text-2xl md:text-7xl mb-20 font-mono uppercase font-bold text-white ">
          🏆Tracks🏆
          </h2>

          {tracks.map((track) => (
            <div key={track.title} className="space-y-3 flex flex-col items-start w-full max-w-sm">
              <h3 className="text-3xl md:text-4xl font-medium text-white">{track.title}</h3>
              <p className="text-sm md:text-base text-gray-300 text-left">{track.description}</p>
              <ul className="list-disc pl-5 text-sm md:text-base text-gray-300">
                {track.criteria.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="text-sm md:text-base text-gray-300 text-left">
                <span className="font-medium text-white">Sponsored by:</span> {track.sponsors.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
