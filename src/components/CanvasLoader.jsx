import { Html, useProgress } from "@react-three/drei"

const CanvasLoader = () => {
	const { progress } = useProgress()

	return (
		<Html
			as="div"
			center
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}>
			<span className="canvas-loader" />
			<p
				style={{
					fontsize: "14px",
					color: "#f1f1f1",
					fontWeight: 800,
					marginTop: "40px",
				}}>
				{progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
			</p>
		</Html>
	)
}
export default CanvasLoader