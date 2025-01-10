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
        <footer className="mt-20 sm:mt-[100px]">
            <div className="sm:flex gap-x-20 px-4 sm:px-20 py-[60px]">
                <div className="w-full sm:w-[355px]">
                    <div className="relative size-12">
                        <Image src="/assets/images/logo.svg" fill alt="Klothink Logo" />
                    </div>
                    <div className="flex justify-between items-center gap-x-2 mt-[30px]">
                        <input placeholder="Enter Your Email" className="block flex-1 border-gray-300 pl-4 border rounded-full h-[49px]" type="text" />
                        <FilledButton>Subscribe</FilledButton>
                    </div>
                </div>
                <div className="sm:flex flex-1 justify-between hidden sm:pl-[60px]">
                    <div>
                        <p className="mb-6 font-medium text-[18px] text-grey-15">Home</p>
                        <div className="sm:flex flex-col gap-y-[14px] hidden">
                            {_homeLinks.map(({ name, url }) => (
                                <p className="tracking-[-3%]" key={name}>{name}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="mb-6 font-medium text-[18px] text-grey-15">Menswear</p>
                        <div className="sm:flex flex-col gap-y-[14px] hidden">
                            {_mensWearLinks.map(({ name, url }) => (
                                <p className="tracking-[-3%]" key={name}>{name}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="mb-6 font-medium text-[18px] text-grey-15">Womenswear</p>
                        <div className="sm:flex flex-col gap-y-[14px] hidden">
                            {_mensWearLinks.map(({ name, url }) => (
                                <p className="tracking-[-3%]" key={name}>{name}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="mb-6 font-medium text-[18px] text-grey-15">Kidswear</p>
                        <div className="sm:flex flex-col gap-y-[14px] hidden">
                            {_mensWearLinks.map(({ name, url }) => (
                                <p className="tracking-[-3%]" key={name}>{name}</p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-between items-center gap-y-[14px] mt-5 px-4 sm:px-20 py-5 sm:py-7">
                <div className="flex sm:flex-row flex-col items-center gap-x-10 gap-y-[6px] text-grey-60">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
                <div className="sm:flex items-center gap-x-4 hidden">
                    <div className="flex justify-center items-center bg-grey-10 rounded-full size-9">
                        <Image src="/assets/images/facebook.svg" alt="facebook" width={16} height={16} />
                    </div>
                    <div className="flex justify-center items-center bg-grey-10 rounded-full size-9">
                        <Image src="/assets/images/twitter.svg" alt="twitter" width={16} height={16} />
                    </div>
                    <div className="flex justify-center items-center bg-grey-10 rounded-full size-9">
                        <Image src="/assets/images/linkedin.svg" alt="linkedin" width={16} height={16} />
                    </div>
                </div>
                <p className="text-grey-40">© 2024 Klothink. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;