const now = new Date();
const XDaysAgoDate =  new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); 
const isoString = XDaysAgoDate.toISOString()
const XDaysAgoDateString = isoString.slice(0, 10)

console.log(XDaysAgoDateString)