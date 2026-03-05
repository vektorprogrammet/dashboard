import type {PersonCore,ContactInfo} from "@/types/person";
export interface Soker extends PersonCore,ContactInfo{
    study: string;
    lang: string;
    status: string;
}
