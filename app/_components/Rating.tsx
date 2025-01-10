import { StarIcon } from "@heroicons/react/16/solid"

const Rating = ({ value } : { value: number}) => {
    return (
        <div className="flex items-center gap-x-[3px]">
            {Array(value).fill('').map((_, i) => (
                <StarIcon key={i} className="text-yellow-50 size-5" />
            ))}
        </div>
    )
}

export default Rating;