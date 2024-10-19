import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative h-[75vh] w-full border-b border-ui-border-base overflow-hidden">
      <Image
        src="https://utfs.io/f/Ez0xBUkcqGmdNaOf6ls1r5pSRsO0H8jcmXteuZgDvCoaMz3U"
        alt="Military personnel in action"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center small:p-32 gap-6 z-20">
        <span className="max-w-2xl">
          <Heading
            level="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Equip Your Mission with Front Line Military
          </Heading>
          <Heading
            level="h2"
            className="text-xl md:text-2xl lg:text-3xl font-normal text-white mb-8"
          >
            Your Trusted Source for Premium Military Equipment in Salisbury
          </Heading>
        </span>
        <Button
          variant="primary"
          className="bg-ui-button-primary hover:bg-ui-button-primary-hover text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Explore Our Arsenal
        </Button>
      </div>
    </div>
  )
}

export default Hero