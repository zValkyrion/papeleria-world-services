import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AvisoPrivacidad() {
  return (
    <div className="relative min-h-screen bg-white text-[#120830] overflow-hidden flex flex-col justify-between">
      {/* Background Glow Details */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-orange-200/10 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Navbar - will handle anchors automatically as a Server Component */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex-1 pt-32 pb-24 px-6 max-w-4xl mx-auto w-full">
        <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-purple-600 font-mono block mb-4">
          Cumplimiento Legal y Confianza
        </span>
        <h1 className="text-4xl font-extrabold tracking-tighter text-[#120830] mb-8">
          Aviso de Privacidad
        </h1>
        
        <div className="prose prose-purple text-zinc-600 text-sm leading-relaxed flex flex-col gap-6 font-normal">
          <p>
            En <strong>WORLD SERVICES</strong>, accesible desde <a href="https://worldservices.com.mx" className="text-purple-600 font-bold hover:underline">https://worldservices.com.mx</a>, una de nuestras principales prioridades es la privacidad de nuestros visitantes y clientes. Este documento de Aviso de Privacidad contiene los tipos de información que recopila y registra WORLD SERVICES y cómo la utilizamos.
          </p>

          <h2 className="text-lg font-bold text-[#120830] mt-6">1. Identidad y Domicilio del Responsable</h2>
          <p>
            WORLD SERVICES es el responsable del tratamiento de los datos personales que nos proporcione, con cobertura corporativa nacional e instalaciones principales ubicadas en la Ciudad de México, México.
          </p>

          <h2 className="text-lg font-bold text-[#120830] mt-6">2. Datos Personales Recopilados</h2>
          <p>
            Cuando usted interactúa con nuestro formulario de cotización inteligente o nos contacta de forma directa mediante canales rápidos como WhatsApp y llamadas telefónicas, recopilamos los siguientes datos:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Nombre completo de contacto o representante legal.</li>
            <li>Nombre de la empresa u organización.</li>
            <li>Teléfono directo de contacto.</li>
            <li>Correo electrónico corporativo o personal.</li>
            <li>Detalles y especificaciones del proyecto de comunicación visual requerido.</li>
            <li>Presupuesto estimado asignado.</li>
          </ul>

          <h2 className="text-lg font-bold text-[#120830] mt-6">3. Finalidad del Tratamiento de Datos</h2>
          <p>
            Los datos personales que recopilamos se utilizan de manera exclusiva para las siguientes finalidades esenciales:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Proveer asesoría técnica especializada y cotizaciones precisas de sustratos, impresión y rotulación.</li>
            <li>Dar seguimiento personalizado a las fases del proceso de su proyecto (Diseño, Producción e Instalación certificada).</li>
            <li>Mantener comunicación continua respecto a tiempos de entrega, logística y control de calidad.</li>
            <li>Dar cumplimiento a requerimientos legales de facturación, contratos comerciales y servicio postventa.</li>
          </ul>

          <h2 className="text-lg font-bold text-[#120830] mt-6">4. Transferencia de Datos</h2>
          <p>
            WORLD SERVICES se compromete a no transferir, vender, alquilar o compartir sus datos personales con terceros ajenos a nuestra operación sin su consentimiento expreso, salvo que sea requerido por mandatos legales o autoridades judiciales competentes en México.
          </p>

          <h2 className="text-lg font-bold text-[#120830] mt-6">5. Derechos ARCO</h2>
          <p>
            Usted tiene en todo momento el derecho de acceder, rectificar, cancelar u oponerse (derechos ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos o revocar el consentimiento previamente otorgado, puede enviar una solicitud formal por escrito al correo electrónico corporativo: <a href="mailto:sales@worldservices.com.mx" className="text-purple-600 font-bold hover:underline">sales@worldservices.com.mx</a>.
          </p>

          <h2 className="text-lg font-bold text-[#120830] mt-6">6. Cambios a este Aviso de Privacidad</h2>
          <p>
            Nos reservamos el derecho de actualizar o modificar el presente Aviso de Privacidad en cualquier momento para adaptarlo a novedades legislativas, políticas internas de seguridad o mejores prácticas en la industria visual de gran formato. Las modificaciones estarán disponibles directamente a través de nuestro sitio web.
          </p>

          <p className="text-xs text-zinc-400 mt-8">
            Última actualización: 1 de Junio de 2026.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
