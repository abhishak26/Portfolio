import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { ContactForm } from "@/components/ContactForm";
import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="11"
            eyebrow="Contact"
            title="Let's talk."
            description="Have a project in mind? Tell us what you need and we'll get back to you."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="space-y-3">
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
              <InfoCard icon={MapPin} label="Location" value={site.location} />
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
      <span className="flex size-10 items-center justify-center rounded-full border border-line text-lime">
        <Icon className="size-4" strokeWidth={1.7} />
      </span>
      <span>
        <span className="block text-xs tracking-wide text-faint uppercase">{label}</span>
        <span className="mt-1 block text-sm font-medium text-fg">{value}</span>
      </span>
    </>
  );
  const className = "glass flex items-center gap-4 rounded-xl p-4";
  if (href) {
    return (
      <a href={href} className={className} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return <div className={className}>{inner}</div>;
}
