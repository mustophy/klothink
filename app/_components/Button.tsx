import { IButton } from "@/interface"

export const FilledButton: React.FC<IButton> = ({ children, icon, className }) => {
    return (
        <button className={`bg-yellow-50 flex items-center shrink-0 h-fit px-5 py-[14px] rounded-[32px] font-semibold text-[14px] text-grey-15 ${className}`}>
            {icon && <span className="flex justify-center items-center mr-[6px]">{icon}</span>}
            {children}
        </button>
    )
}

export const OutlinedButton: React.FC<IButton> = ({ children, icon, className }) => {
    return (
        <button className={`border border-white-95 flex items-center shrink-0 h-fit px-5 py-[14px] rounded-[32px] font-semibold text-[14px] text-grey-15 ${className}`}>
            {icon && <span className="flex justify-center items-center mr-[6px]">{icon}</span>}
            {children}
        </button>
    )
}

export const Pill: React.FC<IButton> = ({ children }) => {
    return (
        <button className="flex justify-center items-center border-white-95 bg-white-97 py-2 border rounded-[32px] min-w-[40px] h-[25px] text-[12px] text-grey-15 shrink-0">
            {children}
        </button>
    )
}