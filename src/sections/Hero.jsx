import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants/index.js"
import HackerRoom from "../components/HackerRoom.jsx"
import CanvasLoader from "../components/CanvasLoader.jsx"
import Target from "../components/Target.jsx"
import ReactLogo from "../components/ReactLogo.jsx"
import Cube from "../components/Cube.jsx"
import Ring from "../components/Ring.jsx"
import HeroCamera from "../components/HeroCamera.jsx"
import Button from "../components/Button.jsx"

const Hero = () => {
	const isSmall = useMediaQuery({ maxWidth: 440 })
	const isMobile = useMediaQuery({ maxWidth: 768 })
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

	const sizes = calculateSizes(isSmall, isMobile, isTablet)

	return (
		<section className="relative flex min-h-screen w-full flex-col">
			<div className="c-space mx-auto mt-20 flex w-full flex-col gap-3 sm:mt-36">
				<p className="text-center font-generalsans text-2xl font-medium text-white sm:text-3xl">
					Hi, I am Juanes <span className="waving-hand">👋</span>
				</p>
				<p className="text-gray_gradient hero_tag">
					Building Products & Brands
				</p>
			</div>
			<div className="absolute inset-0 h-full w-full">
				<Canvas className="h-full w-full">
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera
							makeDefault
							position={[0, 0, 20]}
						/>
						<HeroCamera isMobile={isMobile}>
							<HackerRoom
								position={sizes.deskPosition}
								rotation={[0, -Math.PI, 0]}
								scale={sizes.deskScale}
							/>
						</HeroCamera>
						<group>
							<Target position={sizes.targetPosition} />
							<ReactLogo position={sizes.reactLogoPosition} />
							<Cube position={sizes.cubePosition} />
							<Ring position={sizes.ringPosition} />
						</group>
						<ambientLight intensity={1} />
						<directionalLight
							position={[10, 10, 10]}
							intensity={0.5}
						/>
					</Suspense>
				</Canvas>
			</div>
			<div className="c-space absolute bottom-7 left-0 right-0 z-10 w-full">
				<a
					href="#contact"
					className="w-fit">
					<Button
						name="Let's work together"
						isBeam
						containerClass="sm:w-fit w-full sm:min-w-96"
					/>
				</a>
			</div>
		</section>
	)
}
export default Hero
