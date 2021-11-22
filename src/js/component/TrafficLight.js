import React, { useState } from "react";

export const TrafficLight = () => {
	const [light, setLight] = useState("green");

	return (
		<div className="TrafficLight bg-dark container p-4 m-4 mx-auto">
			<div className="row mx-auto d-flex justify-content-around p-3">
				<div
					className={
						light === "red"
							? `circle light-red myshadow`
							: "circle light-red"
					}
					onClick={() => setLight("red")}></div>
			</div>
			<div className="row mx-auto d-flex justify-content-around p-3">
				<div
					className={
						light === "yellow"
							? `circle light-yellow myshadow`
							: "circle light-yellow"
					}
					onClick={() => setLight("yellow")}></div>
			</div>
			<div className="row mx-auto d-flex justify-content-around p-3">
				<div
					className={
						light === "green"
							? `circle light-green myshadow`
							: "circle light-green"
					}
					onClick={() => setLight("green")}></div>
			</div>
		</div>
	);
};
