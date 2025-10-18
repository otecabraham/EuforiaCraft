import RuleCategory from "@/components/RuleCategory";
import { Shield, MessageSquare, Sword, Users, Pickaxe, AlertTriangle } from "lucide-react";

export default function PravidlaPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Pravidla Serveru
          </h1>
          <p className="text-xl text-muted-foreground">
            Prosím přečti si pravidla před hraním na serveru
          </p>
        </div>

        <div className="space-y-4">
          <RuleCategory
            title="Základní pravidla"
            icon={Shield}
            rules={[
              "Respektuj ostatní hráče a členy týmu serveru",
              "Nepoužívej cheaty, hacked klienty ani X-Ray textury",
              "Nespamuj v chatu a nepoužívej vulgární nebo urážlivý jazyk",
              "Nezneužívej bugy a glitche - vždy je nahlaste adminům",
              "Neobcházej bany pomocí alternativních účtů",
            ]}
            defaultOpen
          />

          <RuleCategory
            title="Pravidla chatu"
            icon={MessageSquare}
            rules={[
              "Nerozesílej reklamy na jiné servery bez povolení",
              "Nerozšiřuj osobní informace jiných hráčů",
              "Používej chat v češtině nebo angličtině",
              "Nežebrej o itemy, peníze nebo VIP",
              "Neškůdcuj ostatním hráčům spamem",
            ]}
          />

          <RuleCategory
            title="PvP a Combat"
            icon={Sword}
            rules={[
              "PvP je povoleno pouze v PvP zónách",
              "Combat logging (odpojení během souboje) je zakázáno",
              "Respektuj fair play - nepoužívej nelegální výhody",
              "Nekradni itemy z těl při neférových zabití",
            ]}
          />

          <RuleCategory
            title="Stavění a Griefing"
            icon={Pickaxe}
            rules={[
              "Griefing (ničení staveb ostatních) je přísně zakázán",
              "Respektuj claimy a území ostatních hráčů",
              "Nestavěj urážlivé nebo nevhodné stavby",
              "Nespawnuj obrovské množství mobů nebo entit",
              "Používej claim systém k ochraně svých staveb",
            ]}
          />

          <RuleCategory
            title="Obchodování a Ekonomika"
            icon={Users}
            rules={[
              "Scamming (podvádění při obchodech) je zakázáno",
              "Respektuj dohodnuté ceny a podmínky obchodu",
              "Nezneužívej ekonomiku serveru exploity",
              "Nemanipuluj s trhem pomocí botů",
            ]}
          />

          <RuleCategory
            title="Tresty"
            icon={AlertTriangle}
            rules={[
              "První porušení: Varování nebo krátký ban",
              "Opakované porušení: Delší ban podle závažnosti",
              "Závažné porušení: Permanentní ban",
              "Všechny tresty podléhají rozhodnutí admin týmu",
              "Proti trestu se můžeš odvolat na Discordu",
            ]}
          />
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
          <p className="text-center text-foreground/90">
            Neznalost pravidel tě neomlouvá. Hraním na serveru souhlasíš s těmito pravidly.
          </p>
        </div>
      </div>
    </div>
  );
}
