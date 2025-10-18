import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface RuleCategoryProps {
  title: string;
  icon: LucideIcon;
  rules: string[];
  defaultOpen?: boolean;
}

export default function RuleCategory({ title, icon: Icon, rules, defaultOpen = false }: RuleCategoryProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Card className="overflow-hidden hover-elevate transition-all">
      <CardHeader
        className="cursor-pointer hover:bg-accent/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        data-testid={`button-toggle-${title.toLowerCase()}`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-md bg-gradient-to-br from-primary/20 to-accent/20">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </CardHeader>
      
      {isOpen && (
        <CardContent className="space-y-3 pt-4">
          {rules.map((rule, index) => (
            <div key={index} className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-semibold flex items-center justify-center">
                {index + 1}
              </span>
              <p className="text-foreground/90 leading-relaxed">{rule}</p>
            </div>
          ))}
        </CardContent>
      )}
    </Card>
  );
}
