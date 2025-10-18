import ContactCard from "../ContactCard";
import { MessageCircle, Mail, Youtube } from "lucide-react";

export default function ContactCardExample() {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-8">
      <ContactCard
        title="Discord"
        description="Připoj se k naší komunitě na Discordu"
        icon={MessageCircle}
        buttonText="Přejít na Discord"
        buttonLink="https://discord.gg/euforiacraft"
      />
      <ContactCard
        title="Email"
        description="Kontaktuj nás emailem pro oficiální dotazy"
        icon={Mail}
        buttonText="Napsat email"
        buttonLink="mailto:admin@euforiacraft.cz"
      />
      <ContactCard
        title="YouTube"
        description="Sleduj naše videa a tutoriály"
        icon={Youtube}
        buttonText="Přejít na YouTube"
        buttonLink="https://youtube.com/@euforiacraft"
      />
    </div>
  );
}
