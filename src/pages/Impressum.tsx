import { useEffect } from "react";
import LegalLayout from "@/components/LegalLayout";

const Impressum = () => {
  useEffect(() => {
    document.title = "Impressum | Niklas Schmolenski";
  }, []);

  return (
    <LegalLayout title="Impressum" subtitle="Angaben gemäß § 5 DDG">
      <div className="space-y-2 text-lg leading-relaxed">
        <p>Niklas Schmolenski</p>
        <p>Nollendorfstraße 21A</p>
        <p>10777 Berlin</p>
        <p>Deutschland</p>
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
    </LegalLayout>
  );
};

export default Impressum;
