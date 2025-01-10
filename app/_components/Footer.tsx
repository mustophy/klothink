import Image from "next/image";
import { FilledButton } from "./Button";

const Footer = () => {
    const _homeLinks = [
        {
            name: 'Features',
            url: ''
        },
        {
            name: 'Popular Products',
            url: ''
        },
        {
            name: 'Testimonials',
            url: ''
        },
        {
            name: 'Faq',
            url: ''
        }
    ]
    const _mensWearLinks = [
        {
            name: 'Casual',
            url: ''
        },
        {
            name: 'Formal',
            url: ''
        },
        {
            name: 'Party',
            url: ''
        },
        {
            name: 'Business',
            url: ''
        },
    ]
    return (
        <footer className="mt-[100px]">
            <div className="flex gap-x-20 px-20 pt-[60px]">
                <div className="w-[355px]">
                    <div className="relative size-12">
                        <Image src="/assets/images/logo.svg" fill alt="Klothink Logo" />
                    </div>
                    <div className="flex justify-between items-center mt-[30px]">
                        <input type="text" />
                        <FilledButton>Subscribe</FilledButton>
                    </div>
                </div>
                <div className="flex flex-1 justify-between pl-[60px]">
                    <div>
                        <p className="mb-6 font-medium text-[18px] text-grey-15">Home</p>
                        <div className="flex flex-col gap-y-[14px]">
                            {_homeLinks.map(({ name, url }) => (
                                <p className="tracking-[-3%]" key={name}>{name}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="mb-6 font-medium text-[18px] text-grey-15">Menswear</p>
                        <div className="flex flex-col gap-y-[14px]">
                            {_mensWearLinks.map(({ name, url }) => (
                                <p className="tracking-[-3%]" key={name}>{name}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="mb-6 font-medium text-[18px] text-grey-15">Womenswear</p>
                        <div className="flex flex-col gap-y-[14px]">
                            {_mensWearLinks.map(({ name, url }) => (
                                <p className="tracking-[-3%]" key={name}>{name}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="mb-6 font-medium text-[18px] text-grey-15">Kidswear</p>
                        <div className="flex flex-col gap-y-[14px]">
                            {_mensWearLinks.map(({ name, url }) => (
                                <p className="tracking-[-3%]" key={name}>{name}</p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className="px-20 py-[30px]">
                <p>© 2021 - All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;