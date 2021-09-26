import React from 'react';
import './styles.css';
import { BackgroundCircle } from '../BackgroundCircle';
import { Eyes } from '../Eyes';
import { Mouth } from '../Mouth';

const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 150;
const eyeOffsetY = 100;
const eyeRadius = 45;
const mouthWidth = 20;
const mouthRadius = 140;

const Smiley = () => {
	return (
		<div className="Smiley">
			<svg width={width} height={height}>
				<g transform={`translate(${centerX},${centerY})`}>
					<BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth} />
					<Eyes
						eyeOffsetX={eyeOffsetX}
						eyeOffsetY={eyeOffsetY}
						eyeRadius={eyeRadius}
					/>
					<Mouth
						mouthWidth={mouthWidth}
						mouthRadius={mouthRadius}
					/>
				</g>
			</svg>
		</div>
	)
}

export default Smiley;