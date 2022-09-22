import {variants} from "~/utils/variants-motion";
import {motion} from "framer-motion";

function MotionRouter({children}){
    return (<motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{duration: 0.4, type: 'easeInOut'}}
        style={{position: 'relative'}}>
        {children}
    </motion.div>)
}

export default MotionRouter;
