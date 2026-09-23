import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { ContactForm } from "@/components/ContactForm";
import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="relative py-14 sm:py-20">
      <div className="container-page">
        <Reveal>
              <SectionHeading
            eyebrow="Contact"
            title="Let's talk."
            description="Tell us what you need and we will get back to you."
          />
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <InfoCard
                icon={Mail}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
              <InfoCard icon={Phone} label="Phone" value={site.phone} href={site.phoneHref} />
              <InfoCard
                icon={MessageCircle}
                label="WhatsApp"
                value={site.whatsapp}
                href={site.whatsappHref}
              />
              <InfoCard icon={MapPin} label="Address" value={site.address} />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.08}>
            <GlassCard className="p-6 sm:p-8">
              <ContactForm />
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-black bg-black text-white shadow-sm">
        <Icon className="size-5" strokeWidth={1.8} />
      </span>
      <span>
        <span className="block text-xs tracking-wide text-faint uppercase">{label}</span>
        <span className="mt-1 block text-sm font-medium text-fg">{value}</span>
      </span>
    </>
  );
  const className = "glass flex items-center gap-4 rounded-2xl p-4 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-lime/50 hover:shadow-glow";
  if (href) {
    return (
      <a href={href} className={className} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return <div className={className}>{inner}</div>;
}
