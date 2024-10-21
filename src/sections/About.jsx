import Globe from "react-globe.gl"
import Button from "../components/Button.jsx"
import { useState } from "react"

const About = () => {
	const [hasCopied, setHasCopied] = useState(false)

	const handleCopy = () => {
		navigator.clipboard.writeText("juanescacha@hotmail.com").then()

		setHasCopied(true)

		setTimeout(() => {
			setHasCopied(false)
		}, 2000)
	}

	return (
		<section
			className="c-space my-20"
			id="about">
			<div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container">
						<img
							src="/assets/grid1.png"
							alt="grid-1"
							className="h-fit w-full object-contain sm:h-[276px]"
						/>
						<div>
							<p className="grid-headtext">Hi, I'm Juanes</p>
							<p className="grid-subtext">
								With 2 years of experience, I have honed my
								skills in frontend and backend development, with
								a focus on animated 3D websites.
							</p>
						</div>
					</div>
				</div>
				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container">
						<img
							src="/assets/grid2.png"
							alt="grid-2"
							className="h-fit w-full object-contain sm:h-[276px]"
						/>
						<div>
							<p className="grid-headtext">Tech Stack</p>
							<p className="grid-subtext">
								I specialize in Javascript/TypeScript with a
								focus on React and Next.js ecosystems.
							</p>
						</div>
					</div>
				</div>
				<div className="col-span-1 xl:row-span-4">
					<div className="grid-container">
						<div className="flex h-fit w-full items-center justify-center rounded-3xl sm:h-[326px]">
							<Globe
								height={326}
								width={326}
								backgroundColor="rgba(0, 0, 0, 0)"
								backgroundImageOpacity={0.5}
								showAtmosphere
								globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
								bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
							/>
						</div>
						<div>
							<p className="grid-headtext">
								I work remotely across most timezones.
							</p>
							<p className="grid-subtext">
								I'm based in Colombia, with remote work
								available.
							</p>
							<Button
								name="Contact Me"
								isBeam
								containerClass="w-full mt-10"
							/>
						</div>
					</div>
				</div>
				<div className="xl:col-span-2 xl:row-span-3">
					<div className="grid-container">
						<img
							src="/assets/grid3.png"
							alt="grid-3"
							className="h-fit w-full object-contain sm:h-[266px]"
						/>
						<div>
							<p className="grid-headtext">
								My Passion for Coding
							</p>
							<p className="grid-subtext">
								I love solving problems and building things
								through code. Coding isn't just my profession -
								it is my passion.
							</p>
						</div>
					</div>
				</div>

				<div className="xl:col-span-1 xl:row-span-2">
					<div className="grid-container">
						<img
							src="/assets/grid4.png"
							alt="grid-4"
							className="h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[126px]"
						/>
						<div className="space-y-2">
							<p className="grid-subtext text-center">
								Contact Me
							</p>
							<div
								className="copy-container group"
								onClick={handleCopy}>
								<img
									src={
										hasCopied
											? "/assets/tick.svg"
											: "/assets/copy.svg"
									}
									className="h-7"
									alt="copy"
								/>

								<p className="text-gray_gradient font-medium group-hover:text-white md:text-xl lg:text-2xl">
									juanescacha@hotmail.com
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default About
