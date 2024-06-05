import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import firstPage from '../assets/Hero.png'

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
}

const SplashComponent = ({ num }) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <motion.div
      className='box'
      ref={ref}
      variants={boxVariant}
      initial='hidden'
      animate={control}
    >
      <motion.img src={firstPage} />
    </motion.div>
  )
}

export default SplashComponent
