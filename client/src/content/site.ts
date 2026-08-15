import { DESIGN_SPEC } from "./designSpec";
import { BASE } from "@/lib/utils";

export const SITE = {
  name: DESIGN_SPEC.brand.name,
  lockup: DESIGN_SPEC.brand.lockup,
  fullName: "Sharan Goutham",
  navBrand: DESIGN_SPEC.brand.name,
  headline: DESIGN_SPEC.brand.role,
  tagline: DESIGN_SPEC.brand.tagline,
  email: "sharan1114411@gmail.com",
  phone: "+91 7013123744",
  location: "Remote",
  linkedin: "https://www.linkedin.com/in/",
  github: "https://github.com/",
  resumePath: `${BASE}/resume.pdf`,
  /** Portrait in `client/public` — served as `/me.png` (or `/Myport/me.png` on GitHub Pages) */
  profilePhoto: `${BASE}/me.png`,
} as const;
