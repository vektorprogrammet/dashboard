type Utlegg={
id:string,
region: string,
date: string,
category: string,
sum: number,
receipt: string,
status:string

}


export function getUtlegg(): Array<Utlegg>{
    return([
         {
            id:"1",
            region:"Trondheim",
            date:"15.02.26",
            category:"Pizzabudsjett",
            sum:350,
            receipt:"dusbdu@vektorprogrammet.no",
            status:"Refundert"

         },
         {
            id:"2",
            region:"Ås",
            date:"26.01.26",
            category:"Teamsosial",
            sum:220,
            receipt:"dusbdu@vektorprogrammet.no",
            status:"Under behandling"
         }


    ])
}

export function getCategories(): Array<string>{
    return(["Pizzabudsjett","Teamsosial"])
}

export function getRegion(): Array<string>{
    return(["Ås","Bergen","Trondheim"])
}
