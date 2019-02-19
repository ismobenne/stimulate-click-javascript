// add or remove data to the event
const clickEvent = new MouseEvent('click', {
	clientX: 0,
	clientY: 0,
	layerX: 0,
	layerY: 0,
	button: 0 // left mouse button
})

// firing the event
document.body.dispatchEvent(clickEvent)
