export const formattedTHB = (amount:number) => new Intl.NumberFormat("th-TH", {style:'currency', currency:"THB"}).format(amount)