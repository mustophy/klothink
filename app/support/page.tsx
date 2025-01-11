import { ArrowLongRightIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { FilledButton, OutlinedButton } from "../_components/Button";
import FAQSection from "../_components/FAQSection";

const SupportPage = () => {
  return (
    <main className="page-contents">
      <section>
        <div className="flex flex-col gap-y-[30px] sm:flex-row gap-x-[50px]">
          <div className="w-[523px] max-w-full">
            <div className="section-header">
              <h1 className="section-title">KLOTHINK SUPPORT</h1>
              <span className="section-subtitle">YOUR FASHION ALLY</span>
            </div>
            <p className="section-tagline">
              24/7 Assistance for Seamless Shopping and Unmatched Customer
              Satisfaction.
            </p>
          </div>
          <div className="sm:flex-1 border border-white-95 rounded-[14px] py-5 sm:py-[30px] gap-y-[10px] px-5 sm:px-10 flex flex-wrap justify-between">
            <div className="order-3 sm:order-1">
              <span>Email</span>
              <p className="font-semibold mt-2 text-grey-15">
                support@klothink.com
              </p>
            </div>
            <div className="order-2 sm:order-2">
              <span>Call Us On</span>
              <p className="font-semibold mt-2 text-grey-15">
                +1 (555) 123-4567
              </p>
            </div>
            <div className="order-1 sm:order-3">
              <span>Working Hours</span>
              <p className="font-semibold mt-2 text-grey-15">Available 24/7 </p>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-20">
            <p>Office Locations</p>
            <div className="grid mt-4 sm:grid-cols-3 gap-y-[30px] p-6 sm:p-10 gap-x-10">
                <div>
                    <p className="text-[18px] font-semibold !text-grey-15">New York City, USA</p>
                    <span className="block mt-[6px] mb-6">123 Fashion Avenue, Suite 456, New York, NY 10001</span>
                    <div className="flex gap-x-[10px]">
                        <OutlinedButton icon={<PhoneIcon className="size-5 text-grey-15" />}>Call Now</OutlinedButton>
                        <FilledButton className="!bg-grey-15 !text-absolute-white" rightIcon={<ArrowLongRightIcon className="text-absolute-white size-5" />}>
                          Get Direction
                        </FilledButton>
                    </div>
                </div>
                <div>
                    <p className="text-[18px] font-semibold !text-grey-15">Paris, France</p>
                    <span className="block mt-[6px] mb-6">789 Rue de la Mode, Paris 75001</span>
                    <div className="flex gap-x-[10px]">
                        <OutlinedButton icon={<PhoneIcon className="size-5 text-grey-15" />}>Call Now</OutlinedButton>
                        <FilledButton className="!bg-grey-15 !text-absolute-white" rightIcon={<ArrowLongRightIcon className="text-absolute-white size-5" />}>
                          Get Direction
                        </FilledButton>
                    </div>
                </div>
                <div>
                    <p className="text-[18px] font-semibold !text-grey-15">Tokyo, Japan</p>
                    <span className="block mt-[6px] mb-6">456 Shibuya Fashion Street, Shibuya-ku, Tokyo</span>
                    <div className="flex gap-x-[10px]">
                        <OutlinedButton icon={<PhoneIcon className="size-5 text-grey-15" />}>Call Now</OutlinedButton>
                        <FilledButton className="!bg-grey-15 !text-absolute-white" rightIcon={<ArrowLongRightIcon className="text-absolute-white size-5" />}>
                          Get Direction
                        </FilledButton>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section>
        <div className="flex gap-x-[50px]">
          <div>
            <div className="section-header">
              <h1 className="section-title">Return Policy</h1>
              <span className="section-subtitle">Easy Returns at Klothink</span>
            </div>
            <p className="section-tagline">
              Explore our hassle-free return policy designed to ensure your
              satisfaction with every purchase.
            </p>
          </div>
        </div>
        <div className="p-[30px] sm:p-10 grid gap-y-10 sm:grid-cols-3 gap-x-20 mt-10 sm:mt-[60px]">
          <div>
            <h3>Eligibility</h3>
            <p className="mt-[6px]">
              Items must be unused, with tags attached, and returned within 30
              days of delivery.
            </p>
          </div>
          <div>
            <h3>Process</h3>
            <p className="mt-[6px]">
              Initiate returns through our Return Center for a smooth and
              efficient process.
            </p>
          </div>
          <div>
            <h3>Refund</h3>
            <p className="mt-[6px]">
              Expect a refund to your original payment method within 7-10
              business days .
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex gap-x-[50px]">
          <div>
            <div className="section-header">
              <h1 className="section-title">Cancellation Policy</h1>
              <span className="section-subtitle">
                Flexible Ordering Experience
              </span>
            </div>
            <p className="section-tagline">
              Familiarize yourself with our cancellation policy to make changes
              to your order with ease.
            </p>
          </div>
        </div>
        <div className="p-10 grid gap-y-10 sm:grid-cols-3 gap-x-20 mt-10 sm:mt-[60px]">
          <div>
            <h3>Cancellation Window</h3>
            <p className="mt-[6px]">
              Orders can be canceled within 24 hours of placement for a full
              refund.
            </p>
          </div>
          <div>
            <h3>Cancellation Process</h3>
            <p className="mt-[6px]">
              Visit our Order Management section to cancel your order
              effortlessly.
            </p>
          </div>
          <div>
            <h3>Refund Timeline</h3>
            <p className="mt-[6px]">
              Refunds for canceled orders are processed within 5-7 business
              days.
            </p>
          </div>
        </div>
      </section>
      <FAQSection />
    </main>
  );
};

export default SupportPage;
