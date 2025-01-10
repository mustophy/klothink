'use client'

import { useState } from "react"

const Faq = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex flex-col gap-5 border-white-95 p-6 border rounded-2xl h-fit">
            <div onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center cursor-pointer">
                <p className="font-medium text-grey-15">Can I modify my order after placing it?</p>
                <p className={`text-2xl duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</p>
            </div>
            {isOpen &&
                <div>
                    <span className="text-grey-30">Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.</span>
                </div>
            }
        </div>
    )
}

export default Faq