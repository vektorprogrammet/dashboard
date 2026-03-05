export interface HasId{
    id: string;
}
export interface PersonCore extends HasId{
    firstName: string;
    lastName: string;
}
export interface ContactInfo{
    mail: string;
    tlf?: string;
}
export interface HasSchool{
    school: string;
}
