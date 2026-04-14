import { useEffect } from "react";
import LegalLayout from "@/components/LegalLayout";

const Datenschutz = () => {
  useEffect(() => {
    document.title = "Datenschutzerklärung | Niklas Schmolenski";
  }, []);

  return (
    <LegalLayout
      title="Datenschutzerklärung"
      subtitle="Informationen zur Datenverarbeitung auf dieser Website"
    >
      <div className="space-y-6 leading-relaxed">
        <p className="text-muted-foreground">Stand: 13. April 2026</p>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">1. Verantwortlicher</h2>
          <p>Niklas Schmolenski</p>
          <p>Nollendorfstraße 21A, 10777 Berlin, Deutschland</p>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:niklas.schmolenski@outlook.com"
              className="text-foreground underline-offset-4 hover:underline"
            >
              niklas.schmolenski@outlook.com
            </a>
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">2. Zwecke und Rechtsgrundlagen</h2>
          <p>
            Zur Bereitstellung der Website werden technisch erforderliche Zugriffsdaten verarbeitet.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem und
            funktionsfähigem Betrieb).
          </p>
          <p>
            Für die lokale Speicherung Ihrer Darstellungsoption (hell/dunkel) im Browser gilt
            zusätzlich § 25 Abs. 2 Nr. 2 TDDDG (technisch erforderlich).
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">3. Hosting (GitHub Pages)</h2>
          <p>
            Diese Website wird über GitHub Pages bereitgestellt (GitHub, Inc., 88 Colin P Kelly Jr
            St, San Francisco, CA 94107, USA). Beim Aufruf der Website werden technisch
            erforderliche Verbindungsdaten verarbeitet (z. B. IP-Adresse, Datum/Uhrzeit, angefragte
            Ressource, Statuscode, Browser-/Geräteinformationen und Referrer).
          </p>
          <p>
            Empfänger ist der Hosting-Anbieter. Eine Verarbeitung in Drittländern (insbesondere USA)
            kann dabei nicht ausgeschlossen werden. Die Speicherdauer technischer Zugriffsdaten
            richtet sich nach den Vorgaben des Hosting-Anbieters.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">4. Lokale Speicherung im Browser</h2>
          <p>
            Diese Website speichert ausschließlich Ihre gewählte Darstellungsoption (hell/dunkel) in
            Ihrem Browser (Local Storage), damit die Ansicht bei einem erneuten Besuch beibehalten
            wird.
          </p>
          <p>Es werden keine Tracking-, Marketing- oder Profiling-Cookies eingesetzt.</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">5. Externe Links</h2>
          <p>
            Diese Website enthält Links zu externen Angeboten (z. B. LinkedIn, GitHub, cvchecked.com).
            Beim Klick auf einen externen Link wird die jeweilige Zielseite aufgerufen; ab diesem
            Zeitpunkt gilt die Datenschutzerklärung des jeweiligen Anbieters.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">6. Ihre Rechte</h2>
          <p>Sie haben nach der DSGVO insbesondere folgende Rechte:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Auskunft (Art. 15 DSGVO)</li>
            <li>Berichtigung (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch (Art. 21 DSGVO)</li>
            <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">
            7. Zuständige Aufsichtsbehörde (Berlin)
          </h2>
          <p>Berliner Beauftragte für Datenschutz und Informationsfreiheit</p>
          <p>Alt-Moabit 59-61, 10555 Berlin</p>
          <p>
            Website:{" "}
            <a
              href="https://www.datenschutz-berlin.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline-offset-4 hover:underline"
            >
              https://www.datenschutz-berlin.de/
            </a>
          </p>
        </div>
      </div>
    </LegalLayout>
  );
};

export default Datenschutz;
