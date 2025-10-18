import VIPCard from "../VIPCard";

export default function VIPCardExample() {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-8">
      <VIPCard
        title="Bronze"
        price="99 Kč"
        description="Základní VIP výhody"
        features={[
          "Barevné jméno v chatu",
          "3 domovy (/sethome)",
          "Kit Bronze každých 24h",
          "Přístup do VIP zóny",
        ]}
      />
      <VIPCard
        title="Silver"
        price="199 Kč"
        description="Rozšířené VIP výhody"
        features={[
          "Vše z Bronze",
          "Pestřejší barvy v chatu",
          "5 domovů (/sethome)",
          "Kit Silver každých 12h",
          "/fly na spawnu",
          "Prioritní připojení",
        ]}
        popular
      />
      <VIPCard
        title="Gold"
        price="299 Kč"
        description="Kompletní VIP balíček"
        features={[
          "Vše ze Silver",
          "Animované jméno",
          "10 domovů (/sethome)",
          "Kit Gold každých 6h",
          "/fly všude",
          "Vlastní prefix",
        ]}
      />
    </div>
  );
}
