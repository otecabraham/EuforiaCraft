import RuleCategory from "../RuleCategory";
import { Shield, MessageSquare, Sword } from "lucide-react";

export default function RuleCategoryExample() {
  return (
    <div className="space-y-4 p-8">
      <RuleCategory
        title="Základní pravidla"
        icon={Shield}
        rules={[
          "Respektuj ostatní hráče a členy týmu",
          "Nepoužívej cheaty, hacked klienty ani X-Ray",
          "Nespamuj v chatu a nepoužívej vulgární jazyk",
          "Nezneužívej bugy - nahlaste je adminům",
        ]}
        defaultOpen
      />
      <RuleCategory
        title="Pravidla chatu"
        icon={MessageSquare}
        rules={[
          "Nerozesílej reklamy na jiné servery",
          "Nerozšiřuj osobní informace jiných hráčů",
          "Používej chat v češtině nebo angličtině",
        ]}
      />
      <RuleCategory
        title="Herní pravidla"
        icon={Sword}
        rules={[
          "PvP je povoleno mimo bezpečné zóny",
          "Griefing je přísně zakázán",
          "Respektuj claimy ostatních hráčů",
        ]}
      />
    </div>
  );
}
