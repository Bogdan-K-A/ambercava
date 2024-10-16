import { AnimatePresence, motion } from "framer-motion";
import NavBar from "../../NavBar/NavBar";
import { GrClose } from "react-icons/gr";
import { toggleMenu } from "@/app/animation/toggleMenu";
import s from "./MobileMenu.module.scss";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={s.dropMenu}
          variants={toggleMenu}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          <GrClose className={s.closeBtn} size={24} onClick={toggle} />
          <NavBar toggle={toggle} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
