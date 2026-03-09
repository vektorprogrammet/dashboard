import type { ContactInfo, PersonCore } from "@/types/person";
export interface Soker extends PersonCore, ContactInfo {
  study: string;
  lang: string;
  status: string;
}
