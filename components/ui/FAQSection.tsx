import type { FAQ } from "@/lib/schema";

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="py-8 sm:py-12">
      <h2 className="mb-6 break-words text-xl font-bold text-[#3D1A1A] sm:mb-8 sm:text-2xl">{title}</h2>
      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-[8px] border border-[#E8D0C0] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)] sm:p-6">
            <h3 className="break-words text-base font-semibold text-[#3D1A1A] sm:text-lg">{faq.question}</h3>
            <p className="prose-safe mt-3 text-sm text-[#374151] leading-relaxed sm:text-base">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
