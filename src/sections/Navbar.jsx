import { useState } from "react"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<header className="fixed left-0 right-0 top-0 z-50 bg-black/90">
			<div className="mx-auto max-w-7xl">
				<div className="c-space mx-auto flex items-center justify-between py-5">
					<a
						href="/"
						className="text-xl font-bold text-neutral-400 transition-colors hover:text-white">
						Adrian
					</a>
					<button onClick={toggleMenu}>
						<img
							src={
								isOpen
									? "/assets/close.svg"
									: "/assets/menu.svg"
							}
							alt="toggle"
							className="h-6 w-6"
						/>
					</button>
				</div>
			</div>
		</header>
	)
}
export default Navbar
