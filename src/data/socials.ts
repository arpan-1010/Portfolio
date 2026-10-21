import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import type { ComponentType } from "react";

export interface Social {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

export const socials: Social[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arpan-mondal03/", icon: LinkedinIcon },
  { label: "Facebook", href: "https://www.facebook.com/arpanmondal03", icon: SiFacebook },
  { label: "Instagram", href: "https://www.instagram.com/i.arpan_404/", icon: SiInstagram },
  { label: "X", href: "https://x.com/Arpan_Mondal03", icon: SiX },
];