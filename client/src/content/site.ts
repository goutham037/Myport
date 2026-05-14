import { DESIGN_SPEC } from "./designSpec";

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
  resumePath: "/resume.pdf",
  /** Portrait in `client/public` — served as `/me.png` */
  profilePhoto: "/me.png",
} as const;
