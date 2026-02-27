import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Sorin Labs",
  description: "Términos y Condiciones de Uso de Sorin Labs.",
};

export default function TermsPage() {
  const lastUpdated = "26 de Febrero, 2026";

  return (
    <div className="pt-32 pb-24 min-h-screen border-t border-white/5 bg-[#080808]">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <ScrollReveal>
          <SectionHeading
            title="Términos y Condiciones"
            subtitle={`Última actualización: ${lastUpdated}`}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 prose prose-invert prose-brand max-w-none">
            <h3 className="text-xl font-bold text-white mb-4">
              1. Aceptación de los Términos
            </h3>
            <p className="text-white/70 leading-relaxed mb-8">
              Al acceder a este sitio web, usted acepta estar sujeto a estos
              Términos y Condiciones de Uso, todas las leyes y regulaciones
              aplicables, y acepta que es responsable del cumplimiento de las
              leyes locales aplicables en Costa Rica o su jurisdicción de
              origen.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              2. Licencia de Uso
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              El contenido de este sitio web (incluyendo textos, gráficos,
              logotipos, imágenes e interfaz) es propiedad de Sorin Labs. Se
              concede permiso temporal para descargar una copia del material
              visualizado transitoriamente para fines informativos personales.
              Esta es una concesión de licencia, no una transferencia de título,
              y bajo esta licencia usted no puede:
            </p>
            <ul className="list-disc pl-6 mb-8 text-white/70 space-y-2">
              <li>
                Modificar o copiar sistemáticamente los materiales para su
                reventa comercial.
              </li>
              <li>
                Intentar descompilar o aplicar ingeniería inversa a cualquier
                software contenido en el sitio web de Sorin Labs.
              </li>
              <li>
                Eliminar cualquier derecho de autor u otras anotaciones de
                propiedad de los materiales.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">
              3. Prestación de Servicios Técnicos
            </h3>
            <p className="text-white/70 leading-relaxed mb-8">
              La contratación de los servicios de ingeniería, diseño,
              infraestructura o automatización explicados en este sitio web se
              rigen por los "Statement of Work" (SoW) o Contratos de Servicios
              Profesionales que Sorin Labs emite individualmente para cada
              cliente tras el período de evaluación.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              4. Limitaciones de Responsabilidad
            </h3>
            <p className="text-white/70 leading-relaxed mb-8">
              En ningún caso Sorin Labs o sus proveedores serán responsables por
              cualquier daño (incluyendo, sin limitación, daños por pérdida de
              datos o beneficios, o debido a la interrupción del negocio) que
              surjan del uso o la incapacidad de usar los materiales en el sitio
              web de Sorin Labs, incluso si Sorin Labs ha sido notificado
              verbalmente o por escrito.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              5. Ley Aplicable
            </h3>
            <p className="text-white/70 leading-relaxed">
              Cualquier reclamación relativa al sitio web de Sorin Labs se
              regirá por las leyes de la República de Costa Rica, sin tener en
              cuenta las disposiciones sobre conflictos de leyes.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
