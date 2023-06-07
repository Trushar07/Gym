import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefiteType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import H1Text from "../../shared/H1Text";
import Benefit from "./benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitPageGraphic from "../../assets/BenefitsPageGraphic.png";

const benefits: Array<BenefiteType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ipsa, repellat quasi recusandae modi ab.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ipsa, repellat quasi recusandae modi ab.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ipsa, repellat quasi recusandae modi ab.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <H1Text>MORE THAN JUST GYM.</H1Text>
          <p className="w- my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa
            expedita, neque natus pariatur magnam molestias explicabo architecto
            repellat consectetur repudiandae officiis aspernatur laborum et
            aperiam impedit doloremque itaque provident!
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefiteType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            src={BenefitPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />
          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
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
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </H1Text>
                </motion.div>
              </div>
            </div>

            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit, vero consequatur temporibus debitis deleniti voluptate
                similique officiis corporis quam reprehenderit. Repudiandae
                explicabo ea nobis? Sint voluptatum nam placeat non explicabo.
                Consectetur, a eos harum rerum labore enim illo ipsam vel dolore
                iusto quia praesentium nostrum ullam tenetur dolorem laboriosam
                amet!
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti nam suscipit magni blanditiis! Explicabo, ab quam,
                minima eligendi beatae blanditiis optio deserunt sint assumenda
                quia, at ad voluptatibus labore dolores?
              </p>
            </motion.div>

            {/*Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
