import { DEPENDENT_DEDUCTION, IRRF_TABLE } from "@/features/Employees/constants";
import { NumbetToFixed } from "@/lib/utils";

export const calcBaseSalary = (salary: number, discount: number, dependents: number) => {
  const base = salary - discount - (DEPENDENT_DEDUCTION * dependents);

  return Number.isFinite(base) ? NumbetToFixed(base) : null;
}

export const calcIrffDiscount = (baseSalary:number) => {
  const bracket = IRRF_TABLE.find(({min,max}) => (baseSalary > min) && (baseSalary < max));

  if(!bracket) return null;
  
  const discount = (baseSalary * bracket?.aliquota) - bracket?.deductionShare;

  return Number.isFinite(discount) ? NumbetToFixed(discount) : null;
}

export const handleGrossSalary = (salary: number, discount: number, dependents: number) => {
  const baseSalary = calcBaseSalary(salary, discount, dependents);

  if(baseSalary === null) return 0;

  const irrfDiscount = calcIrffDiscount(baseSalary);

  return irrfDiscount ? NumbetToFixed(irrfDiscount) : 0
}