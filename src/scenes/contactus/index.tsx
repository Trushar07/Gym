import { useForm } from "react-hook-form";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import ContactUsGraphic from "../../assets/ContactUsPageGraphic.png";
import H1Text from "../../shared/H1Text";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full mb-5 rounded-lg bg-primary-300 py-3 px-5 placeholder-white`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24 md:flex">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="justify-center md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <H1Text>
            <span className="text-primary-500">JOIN NOW</span> {""} TO GET IN
            SHAPE
          </H1Text>
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
            sequi. Dolor velit debitis neque porro nostrum obcaecati consequatur
            nam, libero ea excepturi quos saepe necessitatibus placeat vitae
            inventore itaque quis.
          </p>

          {/* Form and Image */}
          <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
              className="mt-10 basis-3/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
                action="https://formsubmit.co/yacesopa@mailgolem.com"
              >
                <input
                  className={inputStyles}
                  type="text"
                  placeholder="NAME"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" &&
                      "This field is required!"}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 characters!"}
                  </p>
                )}

                <input
                  className={inputStyles}
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+\.\S+$/,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" &&
                      "This field is required!"}
                    {errors.name.type === "pattern" &&
                      "Enter valid Email address!"}
                  </p>
                )}

                <textarea
                  className={inputStyles}
                  rows={4}
                  cols={50}
                  placeholder="MESSAGE"
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" &&
                      "This field is required!"}
                    {errors.name.type === "maxLength" &&
                      "Max length is 2000 characters!"}
                  </p>
                )}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="mt-5 rounded-md bg-secondary-500 px-10 py-2 transition duration-500 hover:bg-primary-500 hover:text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
            <motion.div
              className="relative mt-16 basis-2/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                <img
                  src={ContactUsGraphic}
                  alt="contactus-graphic"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
