import { myProjects } from "../constants/index.js"
import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Center, OrbitControls } from "@react-three/drei"
import CanvasLoader from "../components/CanvasLoader.jsx"
import DemoComputer from "../components/DemoComputer.jsx"

const projectCount = myProjects.length

const Projects = () => {
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
	const currentProject = myProjects[selectedProjectIndex]

	const handleNavigation = (direction) => {
		setSelectedProjectIndex((prevIndex) => {
			if (direction === "left") {
				return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
			} else if (direction === "right") {
				return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
			}
		})
	}
	return (
		<section className="c-space my-20">
			<p className="head-text">My Work</p>

			<div className="mt-12 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
				<div className="relative flex flex-col gap-5 px-5 py-10 shadow-2xl shadow-black-200 sm:p-10">
					<div className="absolute right-0 top-0">
						<img
							src={currentProject.spotlight}
							alt="spotlight"
							className="h-96 w-full rounded-xl object-cover"
						/>
					</div>
					<div
						className="w-fit rounded-lg p-3 backdrop-blur-3xl backdrop-filter"
						style={currentProject.logoStyle}>
						<img
							src={currentProject.logo}
							alt="logo"
							className="h-10 w-10 shadow-sm"
						/>
					</div>
					<div className="my-5 flex flex-col gap-5 text-white-600">
						<p className="animatedText text-2xl font-semibold text-white">
							{currentProject.title}
						</p>
						<p className="animatedText">{currentProject.desc}</p>
						<p className="animatedText">{currentProject.subdesc}</p>
					</div>
					<div className="flex flex-wrap items-center justify-between gap-5">
						<div className="flex items-center gap-3">
							{currentProject.tags.map((tag, index) => (
								<div
									key={index}
									className="tech-logo">
									<img
										src={tag.path}
										alt={tag.name}
									/>
								</div>
							))}
						</div>
						<a
							href={currentProject.href}
							target="_blank"
							rel="noreferrer"
							className="flex cursor-pointer items-center gap-2 text-white-600">
							<p>Check Live Site</p>
							<img
								src="/assets/arrow-up.png"
								alt="arrow"
								className="h-3 w-3"
							/>
						</a>
					</div>

					<div className="mt-7 flex items-center justify-between">
						<button
							className="arrow-btn"
							onClick={() => handleNavigation("left")}>
							<img
								src="/assets/left-arrow.png"
								alt="left arrow"
								className="h-4 w-4"
							/>
						</button>
						<button
							className="arrow-btn"
							onClick={() => handleNavigation("right")}>
							<img
								src="/assets/right-arrow.png"
								alt="right arrow"
								className="h-4 w-4"
							/>
						</button>
					</div>
				</div>

				<div className="h-96 rounded-lg border border-black-300 bg-black-200 md:h-full">
					<Canvas>
						<ambientLight intensity={Math.PI} />
						<directionalLight position={[10, 10, 5]} />
						<OrbitControls
							maxPolarAngle={Math.PI / 2}
							enableZoom={false}
						/>
						<Center>
							<Suspense fallback={<CanvasLoader />}>
								<group
									scale={2}
									position={[0, -3, 0]}
									rotation={[0, -0.1, 0]}>
									<DemoComputer
										texture={currentProject.texture}
									/>
								</group>
							</Suspense>
						</Center>
					</Canvas>
				</div>
			</div>
		</section>
	)
}
export default Projects
