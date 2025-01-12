import { FilledButton } from "../_components/Button";

const SignUp = () => {
  return (
    <main>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="px-6 py-10">
          <div className="w-[424px] max-w-full ml-10">
            <h1>Welcome Back</h1>
            <div className="flex flex-col gap-y-6 mt-10">
              <div className="form-field">
                <label htmlFor="">Email or phone number</label>
                <input
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="form-field">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="form-field">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="form-field">
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  placeholder=""
                />
              </div>
              <FilledButton className="!bg-grey-10 mt-4 !text-absolute-white">Sign Up</FilledButton>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default SignUp;
