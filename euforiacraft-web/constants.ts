import { LucideIcon, Shield, Users, Zap, MessageSquare, Server, Swords, Hammer, Gavel, Eye, HeartHandshake, Leaf, Lock, AlertTriangle } from 'lucide-react';

export const SERVER_IP = "euforiacraft.eu";

export const SOCIAL_LINKS = {
  discord: "https://discord.gg/AFFUAuGfFP",
  youtube: "https://youtube.com/@euforiacraft?si=btzMXO1vkigE9PS3"
};

export interface Rule {
  id: number;
  title: string;
  description: string;
  icon: any; 
}

export const SERVER_RULES: Rule[] = [
  { id: 1, title: "Žádné hacky", description: "Používání killaura, x-ray, fly a dalších modifikací je přísně zakázáno.", icon: Shield },
  { id: 2, title: "Žádná toxicita", description: "Nechovej se toxicky, neprovokuj ostatní a udržuj přátelskou atmosféru.", icon: Users },
  { id: 3, title: "Zákaz griefingu", description: "Ničení cizích staveb bez povolení majitele je trestáno banem.", icon: Hammer },
  { id: 4, title: "Žádný spam", description: "Nespamuj chat zprávami, příkazy ani velkými písmeny (CAPS).", icon: MessageSquare },
  { id: 5, title: "Zákaz reklamy", description: "Propagace jiných serverů, webů nebo produktů není povolena.", icon: Zap },
  { id: 6, title: "Čistý jazyk", description: "Vulgarismy, rasismus a urážky nebudou tolerovány.", icon: Gavel },
  { id: 7, title: "Bugy a exploity", description: "Zneužívání chyb hry je zakázáno. Nahlaste je adminům.", icon: AlertTriangle },
  { id: 8, title: "Respektuj Adminy", description: "Slovo admina je konečné. Zbytečné hádky vedou k mute.", icon: Shield },
  { id: 9, title: "Žádné lag stroje", description: "Stavby úmyslně zpomalující server budou smazány.", icon: Server },
  { id: 10, title: "Zákaz podvodů", description: "Scamování ostatních hráčů o herní měnu nebo itemy je zakázáno.", icon: Lock },
  { id: 11, title: "Osobní údaje", description: "Nezveřejňuj osobní údaje (své ani cizí) v chatu.", icon: Eye },
  { id: 12, title: "PVP pravidla", description: "Zabíjení je povoleno pouze v PVP arénách nebo se souhlasem.", icon: Swords },
  { id: 13, title: "Nevhodné stavby", description: "Stavby s vulgární nebo rasistickou tématikou jsou zakázány.", icon: Hammer },
  { id: 14, title: "Zákaz žebrání", description: "Nežebrej o věci, OP práva nebo hodnost od adminů.", icon: MessageSquare },
  { id: 15, title: "TPA Kill", description: "Zabíjení hráčů okamžitě po teleportu je zakázáno.", icon: Swords },
  { id: 16, title: "Nevhodné skiny", description: "Skiny a jména nesmí být urážlivá nebo sexuálně explicitní.", icon: Users },
  { id: 17, title: "Ochrana přírody", description: "Nenič přírodu bezdůvodně (např. lávové sloupy).", icon: Leaf },
  { id: 18, title: "Multi-účet", description: "Obcházení banu přes jiný účet vede k trvalému zablokování IP.", icon: Lock },
  { id: 19, title: "AFK Farmy", description: "AFK farmy jsou povoleny, pokud nezpůsobují lagy.", icon: Server },
  { id: 20, title: "Ztráta věcí", description: "Admini neručí za věci ztracené vlastní chybou nebo glitchingem.", icon: AlertTriangle },
  { id: 21, title: "Neznalost neomlouvá", description: "Pravidla platí pro všechny bez výjimky.", icon: Gavel },
];

export const CHART_DATA = [
  { name: 'Po', players: 45 },
  { name: 'Út', players: 52 },
  { name: 'St', players: 48 },
  { name: 'Čt', players: 61 },
  { name: 'Pá', players: 85 },
  { name: 'So', players: 120 },
  { name: 'Ne', players: 95 },
];