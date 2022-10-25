/** Increase number until maxValue
 * @params {number} value, maxValue
 * @return number
 */
export const handleNumber = (value:number, maxValue:number) => {
  if(value === maxValue) return 1
  return value + 1
}