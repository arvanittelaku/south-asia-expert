import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "What Is a South Asia Expert Witness? | UK Immigration Tribunal Role",
  description:
    "A South Asia expert witness provides independent country condition reports for UK immigration tribunals: Bangladesh politics, India Hindutva, Sri Lanka Tamil, Nepal caste, and Bhutan Lhotshampa analysis.",
  path: "/what-is-a-south-asia-expert-witness",
});

export default function WhatIsSouthAsiaExpertWitnessPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "What Is a South Asia Expert Witness?" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="What Is a South Asia Expert Witness?"
        subtitle="The role, duties, and value of independent country expert evidence in UK South Asian asylum appeals."
        breadcrumbs={crumbs}
      >
        <p className="text-[#374151] leading-relaxed">
          A South Asia expert witness is an independent specialist who provides objective country condition reports for
          UK immigration tribunals. Unlike advocates for either party, the expert&apos;s paramount duty is to the
          tribunal: to assist it in reaching a decision by providing unbiased opinion on matters within their expertise.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#3D1A1A]">What South Asia Experts Assess</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
          <li>Bangladesh political persecution and post-August 2024 transition conditions</li>
          <li>India Hindutva/RSS targeting of Muslims, Sikhs, and Christian minorities</li>
          <li>Sri Lanka Tamil persecution under KK [2021] country guidance framework</li>
          <li>Nepal Maoist-linked claims, caste discrimination, and ethnic minority persecution</li>
          <li>Bhutan Lhotshampa persecution and Nepali-speaking minority discrimination</li>
          <li>LGBTQ+ persecution across South Asian countries including HJ (Iran) standard analysis</li>
          <li>Internal relocation viability and state protection availability</li>
          <li>CPIN challenge and country guidance application</li>
        </ul>

        <h2 className="mt-10 text-xl font-bold text-[#3D1A1A]">When to Instruct a South Asia Expert</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Instruct a South Asia expert witness when the Home Office refusal relies on generic CPIN positions that do not
          address the appellant&apos;s specific country, profile, or personal risk factors. Expert evidence is
          particularly valuable in post-August 2024 Bangladesh claims, India minority and internal relocation cases,
          Sri Lanka Tamil claims under KK [2021], and Nepal/Bhutan claims where no UK country guidance exists.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#3D1A1A]">Report Standards</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          South Asia expert reports comply with CPR Part 35 and Immigration Tribunal Practice Direction paragraph 10.
          Reports cite verifiable sources including current CPINs, country guidance decisions, UN reports, and field
          research. Experts distinguish fact from opinion and do not express views on the appellant&apos;s credibility
          or ultimate refugee status.
        </p>

        <p className="mt-8">
          <Link href="/qualifications" className="font-semibold text-[#E8751A] hover:underline">
            View expert qualifications
          </Link>
          {" · "}
          <Link href="/how-to-instruct" className="font-semibold text-[#E8751A] hover:underline">
            How to instruct
          </Link>
          {" · "}
          <Link href="/contact" className="font-semibold text-[#E8751A] hover:underline">
            Contact us
          </Link>
        </p>
      </PageShell>
    </>
  );
}
