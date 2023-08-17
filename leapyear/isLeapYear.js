const year=1900

const isDivisbleBy100 = year % 100 == 0
const isDivisbleBy400 = year % 400 == 0
const isDivisbleBy4 = year % 4 == 0

const isLeapYear = (isDivisbleBy100 && isDivisbleBy400) || (!isDivisbleBy100 && isDivisbleBy4)
const isLeapYearMessage = isLeapYear ? "is a leap year" : "not a leap year"

console.log(year,isLeapYearMessage)

