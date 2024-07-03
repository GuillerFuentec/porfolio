import { EnvelopeIcon } from "@heroicons/react/20/solid";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormik, FormikProvider } from "formik";
import Layout from "@/styles/Layout";
import { usePhoneNumberValidation } from "@/hook/forms_validator";

export default function Contact({theme}) {
  const { validationSchema } = usePhoneNumberValidation();

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const inputClassNames = `block w-full rounded-md border bg-transparent py-1.5 pl-10 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
    theme === "light"
      ? "border-black text-black ring-black focus:ring-black"
      : "border-gray-300 text-accent ring-gray-300 focus:ring-indigo-600"
  }`;

  const iconClassNames = `h-5 w-5 ${
    theme === "light" ? "text-black" : "text-accent"
  }`;

  const labelClassNames = `block text-sm font-medium leading-6 text-accent mb-2 ${
    theme === "light" ? "text-black" : "text-accent"
  }`;

  const buttonClassNames = `w-full rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
    theme === "light"
      ? "bg-black hover:bg-gray-800 focus-visible:outline-black"
      : "bg-accent hover:bg-indigo-500 focus-visible:outline-indigo-600"
  }`;

  return (
    <Layout>
      <div className="w-full block justify-center hero mt-4">
        <div
          className={`w-3/4 my-28 mx-auto text-accent px-5 py-8 border border-accent rounded-xl ${
            theme === "light"
              ? "border-black text-black ring-black focus:ring-black"
              : "border-gray-300 text-accent ring-gray-300 focus:ring-indigo-600"
          }`}
        >
          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className="px-7 py-4">
              <div className="space-y-4">
                <div className="border-accent border-b pb-4 mb-4">
                  <h2
                    className={`flex text-base font-semibold leading-7 text-accent ${
                      theme === "light" ? "text-black" : "text-accent"
                    }`}
                  >
                    Contact{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-6 ml-1 ${iconClassNames}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </h2>
                  <p
                    className={`mt-1 text-sm leading-6 text-accent ${
                      theme === "light" ? "text-black" : "text-accent"
                    }`}
                  >
                    Let me know more about how I can help you.
                  </p>
                </div>
              </div>
              {/* Labels inputs */}
              {/* Name */}
              <div>
                <label htmlFor="name" className={labelClassNames}>
                  Name
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={iconClassNames}
                      >
                        <path
                          fillRule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className={inputClassNames}
                      placeholder="John Doe"
                    />
                  </div>
                </label>
              </div>
              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className={labelClassNames}>
                  Last Name
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={iconClassNames}
                      >
                        <path
                          fillRule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className={inputClassNames}
                      placeholder="Doe"
                    />
                  </div>
                </label>
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClassNames}>
                  Email
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <EnvelopeIcon
                        className={iconClassNames}
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={inputClassNames}
                      placeholder="you@example.com"
                    />
                  </div>
                </label>
              </div>
              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className={`${labelClassNames}`}>
                  Phone Number
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <PhoneInput
                      country={"us"}
                      enableSearch
                      placeholder="Enter phone number"
                      value={formik.values.phone}
                      onChange={(phone) => formik.setFieldValue("phone", phone)}
                      inputProps={{
                        className: `block w-full rounded-md border bg-transparent py-1.5 pl-10 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                          theme === "light"
                            ? "border-black text-black ring-black focus:ring-black"
                            : "border-gray-300 text-accent ring-gray-300 focus:ring-indigo-600"
                        }`,
                      }}
                    />
                  </div>
                </label>
              </div>
              {/* Company */}
              <div>
                <label htmlFor="company" className={`-mt-4 ${labelClassNames}`}>
                  Company
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={iconClassNames}
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className={inputClassNames}
                      placeholder="Company Inc."
                    />
                  </div>
                </label>
              </div>
              {/* Textarea */}
              <div>
                <p
                  className={`mt-1 text-sm leading-6 text-accent ${
                    theme === "light" ? "text-black" : "text-accent"
                  }`}
                >
                  Tell me about
                </p>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    className={`block w-full rounded-md border border-gray-300 bg-transparent py-1.5 pl-10 text-accent ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      theme === "light"
                        ? "border-black text-black ring-black focus:ring-black"
                        : "border-gray-300 text-accent ring-gray-300 focus:ring-indigo-600"
                    }`}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="border-t border-accent pt-4 mt-5"></div>
              <button type="submit" className={buttonClassNames}>
                Submit
              </button>
            </form>
          </FormikProvider>
        </div>
      </div>
    </Layout>
  );
}
