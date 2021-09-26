import React from 'react';
import './styles.css';
import { BackgroundCircle } from '../BackgroundCircle';
import { Eyes } from '../Eyes';
import { Mouth } from '../Mouth';
import { FaceContainer } from '../FaceContainer';

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

export const Smiley = () => (
		<div className="Smiley">
			<FaceContainer width={width} height={height} centerX={centerX} centerY={centerY}>
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
			</FaceContainer>
		</div>
	)