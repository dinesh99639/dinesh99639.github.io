import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { careerStartDate } from "./constants"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getYearsOfExperience = () => {
    const startDate = new Date(careerStartDate)
    const today = new Date()
    
    let years = today.getFullYear() - startDate.getFullYear()
    const monthDiff = today.getMonth() - startDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
        years--
    }

    return years
}
