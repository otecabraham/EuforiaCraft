import VIPCard from "@/components/VIPCard";

export default function VIPPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            VIP Balíčky
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Podpoř server a získej exkluzivní výhody a vylepšení
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <VIPCard
            title="Bronze"
            price="99 Kč"
            description="Základní VIP výhody pro začátečníky"
            features={[
              "Barevné jméno v chatu",
              "3 domovy (/sethome)",
              "Kit Bronze každých 24h",
              "Přístup do VIP zóny",
              "Prioritní podpora",
            ]}
          />
          
          <VIPCard
            title="Silver"
            price="199 Kč"
            description="Rozšířené VIP výhody pro pokročilé"
            features={[
              "Vše z Bronze ranku",
              "Pestřejší barvy v chatu",
              "5 domovů (/sethome)",
              "Kit Silver každých 12h",
              "/fly na spawnu",
              "Prioritní připojení",
              "Exkluzivní pets",
            ]}
            popular
          />
          
          <VIPCard
            title="Gold"
            price="299 Kč"
            description="Kompletní VIP balíček pro profesionály"
            features={[
              "Vše ze Silver ranku",
              "Animované jméno v chatu",
              "10 domovů (/sethome)",
              "Kit Gold každých 6h",
              "/fly všude na serveru",
              "Vlastní prefix v chatu",
              "Přístup k /disguise",
              "Měsíční bonus diamantů",
            ]}
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Všechny VIP ranky jsou permanentní a platí navždy! 🎉
          </p>
        </div>
      </div>
    </div>
  );
}
