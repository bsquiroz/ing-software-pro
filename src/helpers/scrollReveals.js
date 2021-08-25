import lib from 'scrollreveal'

const ScrollReveal = lib()

const srConfig = (delay, viewFactor, origin, time) => ({
	origin: origin,
	distance: '20px',
	duration: time,
	delay,
	rotate: { x: 0, y: 0, z: 0 },
	opacity: 0,
	scale: 1,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	mobile: true,
	reset: false,
	useDelay: 'always',
	viewFactor,
	viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
})

export const scrollReveal = ({
	component,
	delay = 200,
	scope = 0.18,
	direction = 'left',
	time = 700
}) => {
	ScrollReveal.reveal(component, srConfig(delay, scope, direction, time))
}