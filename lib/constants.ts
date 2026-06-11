export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.southasiaexpert.com";
export const SITE_NAME = "SouthAsiaExpert";
export const SITE_EMAIL = "info@southasiaexpert.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/SouthAsiaExpertWitness";

export const COLORS = {
  primary: "#3D1A1A",
  accent: "#E8751A",
  highlight: "#1B5E20",
  background: "#FFFFFF",
  sectionAlt: "#FDF5F0",
  border: "#E8D0C0",
  heading: "#3D1A1A",
  body: "#374151",
} as const;
