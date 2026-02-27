import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Sorin Labs",
  description: "Política de Privacidad y Tratamiento de Datos de Sorin Labs.",
};

export default function PrivacyPage() {
  const lastUpdated = "26 de Febrero, 2026";

  return (
    <div className="pt-32 pb-24 min-h-screen border-t border-white/5 bg-[#080808]">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <ScrollReveal>
          <SectionHeading
            title="Política de Privacidad"
            subtitle={`Última actualización: ${lastUpdated}`}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 prose prose-invert prose-brand max-w-none">
            <h3 className="text-xl font-bold text-white mb-4">
              1. Recopilación de Información
            </h3>
            <p className="text-white/70 leading-relaxed mb-8">
              Sorin Labs recopila información de contacto (nombre, correo
              electrónico, empresa) únicamente mediante los formularios
              habilitados en nuestro sitio web con el propósito de agendar
              consultorías o enviar propuestas técnicas. No compramos, vendemos
              ni intercambiamos bases de datos de terceros.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              2. Uso de la Información
            </h3>
            <p className="text-white/70 leading-relaxed mb-8">
              La información suministrada es utilizada exclusivamente para:
            </p>
            <ul className="list-disc pl-6 mb-8 text-white/70 space-y-2">
              <li>
                Responder a solicitudes de servicios de ingeniería y diseño.
              </li>
              <li>Enviar cotizaciones y documentación técnica.</li>
              <li>
                Gestionar la facturación electrónica y cumplimiento legal en
                Costa Rica.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">
              3. Seguridad de los Datos
            </h3>
            <p className="text-white/70 leading-relaxed mb-8">
              Implementamos medidas técnicas y organizativas para proteger la
              información contra acceso no autorizado, alteración o destrucción.
              Dado nuestro enfoque en seguridad e infraestructura cloud,
              aplicamos los mismos estándares de seguridad interna que ofrecemos
              a nuestros clientes.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              4. Cookies y Analíticas
            </h3>
            <p className="text-white/70 leading-relaxed mb-8">
              Utilizamos cookies esenciales para el funcionamiento del sitio y
              herramientas analíticas anónimas (privacy-first) para entender el
              tráfico de nuestra web sin rastrear personalmente a los usuarios a
              través de la web.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">5. Contacto</h3>
            <p className="text-white/70 leading-relaxed">
              Para consultas relativas a sus datos personales, revocación de
              consentimiento o exportación de información, por favor envíe un
              correo a{" "}
              <a
                href="mailto:legal@sorinlabs.com"
                className="text-brand hover:underline"
              >
                legal@sorinlabs.com
              </a>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
