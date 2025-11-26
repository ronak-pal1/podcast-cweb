import { FaArrowRightLong } from "react-icons/fa6";
import { TbNorthStar } from "react-icons/tb";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="w-full flex items-center justify-center my-32 overflow-x-hidden" id="contact">
      <div className="w-[90%] lg:w-[80%] flex md:flex-row flex-col items-start  gap-20">
        {/* Left section */}
        <div className="space-y-4  w-full flex-[0.4]">
          <div className="w-[100px] h-[3px] bg-primary mb-8"></div>
          <h3 className="font-gilroy-extra-bold text-3xl md:text-4xl text-primary uppercase">
            Reach Out And Connect With Us
          </h3>
          <p className="text-fade2 text-base md:text-lg font-metropolis-extra-light">
            Join the conversation about the ever-evolving world of business and
            brands. Dive deeper into the insights, failures, and aspirations
            with visionary entrepreneurs Pete Sena and David Salinas, as they
            explore the future of industries and the remarkable stories that
            shape it.
          </p>
        </div>

        {/* Right section  */}
        <div className=" w-full flex-[0.6] space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <div className="flex items-center space-x-3">
              <p className="font-gilroy-extra-bold text-white text-lg md:text-xl">
                Select one...
              </p>

              <div className="w-[15px] h-[15px] rounded-full bg-primary text-black flex items-center justify-center">
                <TbNorthStar className="text-xs" />
              </div>
            </div>

            <select className="w-full p-2 border border-gray-300 text-white font-metropolis rounded-sm outline-none">
              <option value=""></option>
              <option value="option1">Request a show topic</option>
              <option value="option2">Be a guest on the show</option>
              <option value="option3">Press and Media inquiries</option>
              <option value="option4">Feedback and suggestions</option>
              <option value="option5">Other...</option>
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="space-y-3"
          >
            <div className="flex items-center space-x-3">
              <p className="font-gilroy-extra-bold text-white text-lg md:text-xl">
                Full Name
              </p>

              <div className="w-[15px] h-[15px] rounded-full bg-primary text-black flex items-center justify-center">
                <TbNorthStar className="text-xs" />
              </div>
            </div>

            <input
              type="text"
              className="w-full p-2 border border-gray-300 text-white font-metropolis rounded-sm outline-none"
            />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2 }}
            className="space-y-3"
          >
            <div className="flex items-center space-x-3">
              <p className="font-gilroy-extra-bold text-white text-lg md:text-xl">
                Email Address
              </p>

              <div className="w-[15px] h-[15px] rounded-full bg-primary text-black flex items-center justify-center">
                <TbNorthStar className="text-xs" />
              </div>
            </div>

            <input
              type="email"
              className="w-full p-2 border border-gray-300 text-white font-metropolis rounded-sm outline-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5 }}
            className="space-y-3"
          >
            <div className="flex items-center space-x-3">
              <p className="font-gilroy-extra-bold text-white text-lg md:text-xl">
                Leave us a note
              </p>

              <div className="w-[15px] h-[15px] rounded-full bg-primary text-black flex items-center justify-center">
                <TbNorthStar className="text-xs" />
              </div>
            </div>

            <textarea
              rows={4}
              className="w-full p-2 border border-gray-300 text-white font-metropolis rounded-sm outline-none"
            />
          </motion.div>


          <button className="bg-primary text-black px-6 py-2 rounded-sm font-gilroy-extra-bold flex items-center space-x-4">
            <p>Submit</p>
            <FaArrowRightLong className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
