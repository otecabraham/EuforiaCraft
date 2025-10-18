import ContactCard from "@/components/ContactCard";
import { MessageCircle, Youtube, Instagram } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export default function KontaktPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Kontaktuj Nás
          </h1>
          <p className="text-xl text-muted-foreground">
            Jsme tu pro tebe! Vyber si způsob komunikace
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <ContactCard
            title="Discord"
            description="Připoj se k naší komunitě na Discordu"
            icon={MessageCircle}
            buttonText="Přejít na Discord"
            buttonLink="https://discord.gg/2BnzavJxSv"
          />
          
          <ContactCard
            title="YouTube"
            description="Sleduj naše videa a tutoriály"
            icon={Youtube}
            buttonText="Přejít na YouTube"
            buttonLink="https://youtube.com/@euforiacraft?si=GzTDA1oCIzjkZfGO"
          />
          
          <ContactCard
            title="Instagram"
            description="Sleduj aktuality a screenshoty"
            icon={Instagram}
            buttonText="Sledovat na IG"
            buttonLink="https://instagram.com/euforiacraft"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <div className="flex items-center space-x-3 mb-6">
              <SiDiscord className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold">Discord Komunita</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Náš Discord server je nejlepší místo pro rychlou komunikaci, získání podpory
              a seznámení se s ostatními hráči.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>24/7 podpora týmu</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Herní eventy a soutěže</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Oznámení o novinkách</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h2 className="text-2xl font-bold mb-6">Časté Dotazy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Jak se připojím na server?</h3>
                <p className="text-sm text-muted-foreground">
                  Zkopíruj IP adresu play.euforiacraft.cz a připoj se přes multiplayer v Minecraftu.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Jaká je herní verze?</h3>
                <p className="text-sm text-muted-foreground">
                  Server běží na verzi 1.20.4, ale podporuje i starší verze od 1.16+
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Jak získám VIP?</h3>
                <p className="text-sm text-muted-foreground">
                  Navštiv sekci VIP na našem webu a vyber si balíček, který ti vyhovuje.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center p-8 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <h2 className="text-2xl font-bold mb-2">Potřebuješ pomoc?</h2>
          <p className="text-muted-foreground mb-6">
            Náš tým je připraven ti pomoci s jakýmkoliv problémem nebo dotazem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>💬 Discord: EuforiaCraft</span>
            <span className="hidden sm:inline">•</span>
            <span>📺 YouTube: @euforiacraft</span>
            <span className="hidden sm:inline">•</span>
            <span>📸 Instagram: @euforiacraft</span>
          </div>
        </div>
      </div>
    </div>
  );
}
