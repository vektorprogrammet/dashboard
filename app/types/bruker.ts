import type {PersonCore,ContactInfo} from "@/types/person"

export interface  User extends PersonCore,ContactInfo{
    tlf: string,
    period: string;
    study: string;
    place: string;
    active: string;
    
    

}