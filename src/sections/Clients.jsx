import { clientReviews } from "../constants/index.js"

const Clients = () => {
	return (
		<section className="c-space my-20">
			<h3 className="head-text">Hear from my Clients</h3>

			<div className="client-container">
				{clientReviews.map(({ id, name, review, img, position }) => (
					<div
						key={id}
						className="client-review">
						<div>
							<p className="font-light text-white">{review}</p>
							<div className="client-content">
								<div className="flex gap-3">
									<img
										src={img}
										alt={name}
										className="h-12 w-12 rounded-full"
									/>
									<div className="flex flex-col">
										<p className="font-semibold text-white-800">
											{name}
										</p>
										<p className="text-sm font-light text-white-500 md:text-base">
											{position}
										</p>
									</div>
								</div>

								<div className="flex items-center gap-2 self-end">
									{Array.from({ length: 5 }).map(
										(_, index) => (
											<img
												src="/assets/star.png"
												alt="star"
												className="h-5 w-5"
												key={index}
											/>
										),
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
export default Clients
