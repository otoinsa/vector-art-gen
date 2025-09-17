// Main application JavaScript
// Handles UI interactions and export functionality

let processingInstance = null
let currentArtData = null

document.addEventListener('DOMContentLoaded', function() {
	// Initialize UI controls
	initializeControls()
	
	// Initialize Processing.js
	setTimeout(() => {
		try {
			console.log('About to create Processing instance...')
			console.log('Canvas element:', document.getElementById('artCanvas'))
			console.log('Sketch function:', typeof sketch)
			
			processingInstance = new Processing(document.getElementById('artCanvas'), sketch)
			console.log('Processing.js initialized successfully')
			console.log('Processing instance:', processingInstance)
			
			// Wait for Processing to fully initialize
			setTimeout(() => {
				console.log('Calling generateNewArt...')
				generateNewArt()
			}, 1000)
		} catch (error) {
			console.error('Error initializing Processing.js:', error)
			console.error('Error name:', error.name)
			console.error('Error message:', error.message)
			console.error('Error stack:', error.stack)
		}
	}, 1000)
})

function initializeControls() {
	// Pattern selection
	const patternSelect = document.getElementById('pattern')
	patternSelect.addEventListener('change', function() {
		updatePattern(this.value)
	})
	
	// Complexity slider
	const complexitySlider = document.getElementById('complexity')
	const complexityValue = document.getElementById('complexityValue')
	complexitySlider.addEventListener('input', function() {
		complexityValue.textContent = this.value
		updateComplexity(parseInt(this.value))
	})
	
	// Line weight slider
	const lineWeightSlider = document.getElementById('lineWeight')
	const lineWeightValue = document.getElementById('lineWeightValue')
	lineWeightSlider.addEventListener('input', function() {
		lineWeightValue.textContent = this.value
		updateLineWeight(parseFloat(this.value))
	})
	
	// Density slider
	const densitySlider = document.getElementById('density')
	const densityValue = document.getElementById('densityValue')
	densitySlider.addEventListener('input', function() {
		densityValue.textContent = this.value
		updateDensity(parseFloat(this.value))
	})
	
	// Scale slider
	const scaleSlider = document.getElementById('scale')
	const scaleValue = document.getElementById('scaleValue')
	scaleSlider.addEventListener('input', function() {
		scaleValue.textContent = this.value
		updateScale(parseFloat(this.value))
	})
	
	// Rotation slider
	const rotationSlider = document.getElementById('rotation')
	const rotationValue = document.getElementById('rotationValue')
	rotationSlider.addEventListener('input', function() {
		rotationValue.textContent = this.value + '°'
		updateRotation(parseInt(this.value))
	})
	
	// Symmetry slider
	const symmetrySlider = document.getElementById('symmetry')
	const symmetryValue = document.getElementById('symmetryValue')
	symmetrySlider.addEventListener('input', function() {
		symmetryValue.textContent = this.value
		updateSymmetry(parseInt(this.value))
	})
	
	// Spacing slider
	const spacingSlider = document.getElementById('spacing')
	const spacingValue = document.getElementById('spacingValue')
	spacingSlider.addEventListener('input', function() {
		spacingValue.textContent = this.value
		updateSpacing(parseFloat(this.value))
	})
	
	// Randomness slider
	const randomnessSlider = document.getElementById('randomness')
	const randomnessValue = document.getElementById('randomnessValue')
	randomnessSlider.addEventListener('input', function() {
		randomnessValue.textContent = this.value
		updateRandomness(parseFloat(this.value))
	})
	
	// Iterations slider
	const iterationsSlider = document.getElementById('iterations')
	const iterationsValue = document.getElementById('iterationsValue')
	iterationsSlider.addEventListener('input', function() {
		iterationsValue.textContent = this.value
		updateIterations(parseInt(this.value))
	})
	
	// Generate button
	const generateBtn = document.getElementById('generate')
	generateBtn.addEventListener('click', generateNewArt)
	
	// Export buttons
	const exportPDFBtn = document.getElementById('exportPDF')
	exportPDFBtn.addEventListener('click', exportToPDF)
	
	const exportSVGBtn = document.getElementById('exportSVG')
	exportSVGBtn.addEventListener('click', exportToSVG)
	
	const exportGCodeBtn = document.getElementById('exportGCode')
	exportGCodeBtn.addEventListener('click', exportToGCode)
}

function updatePattern(pattern) {
	if (processingInstance && processingInstance.setPattern) {
		processingInstance.setPattern(pattern)
		updateArtData()
	}
}

function updateComplexity(complexity) {
	if (processingInstance && processingInstance.setComplexity) {
		processingInstance.setComplexity(complexity)
		updateArtData()
	}
}

function updateLineWeight(lineWeight) {
	if (processingInstance && processingInstance.setLineWeight) {
		processingInstance.setLineWeight(lineWeight)
		updateArtData()
	}
}

function updateDensity(density) {
	if (processingInstance && processingInstance.setDensity) {
		processingInstance.setDensity(density)
		updateArtData()
	}
}

function updateScale(scale) {
	if (processingInstance && processingInstance.setScale) {
		processingInstance.setScale(scale)
		updateArtData()
	}
}

function updateRotation(rotation) {
	if (processingInstance && processingInstance.setRotation) {
		processingInstance.setRotation(rotation)
		updateArtData()
	}
}

function updateSymmetry(symmetry) {
	if (processingInstance && processingInstance.setSymmetry) {
		processingInstance.setSymmetry(symmetry)
		updateArtData()
	}
}

function updateSpacing(spacing) {
	if (processingInstance && processingInstance.setSpacing) {
		processingInstance.setSpacing(spacing)
		updateArtData()
	}
}

function updateRandomness(randomness) {
	if (processingInstance && processingInstance.setRandomness) {
		processingInstance.setRandomness(randomness)
		updateArtData()
	}
}

function updateIterations(iterations) {
	if (processingInstance && processingInstance.setIterations) {
		processingInstance.setIterations(iterations)
		updateArtData()
	}
}

function updateArtData() {
	if (processingInstance && processingInstance.getVectorData) {
		currentArtData = processingInstance.getVectorData()
	}
}

function generateNewArt() {
	console.log('generateNewArt called')
	
	if (processingInstance) {
		// Get current settings
		const pattern = document.getElementById('pattern').value
		const complexity = parseInt(document.getElementById('complexity').value)
		const lineWeight = parseFloat(document.getElementById('lineWeight').value)
		const density = parseFloat(document.getElementById('density').value)
		const scale = parseFloat(document.getElementById('scale').value)
		const rotation = parseInt(document.getElementById('rotation').value)
		const symmetry = parseInt(document.getElementById('symmetry').value)
		const spacing = parseFloat(document.getElementById('spacing').value)
		const randomness = parseFloat(document.getElementById('randomness').value)
		const iterations = parseInt(document.getElementById('iterations').value)
		
		console.log('Generating art with:', { pattern, complexity, lineWeight, density, scale, rotation, symmetry, spacing, randomness, iterations })
		
		// Force regeneration by calling the Processing sketch functions
		if (processingInstance.setPattern) {
			processingInstance.setPattern(pattern)
		}
		if (processingInstance.setComplexity) {
			processingInstance.setComplexity(complexity)
		}
		if (processingInstance.setLineWeight) {
			processingInstance.setLineWeight(lineWeight)
		}
		if (processingInstance.setDensity) {
			processingInstance.setDensity(density)
		}
		if (processingInstance.setScale) {
			processingInstance.setScale(scale)
		}
		if (processingInstance.setRotation) {
			processingInstance.setRotation(rotation)
		}
		if (processingInstance.setSymmetry) {
			processingInstance.setSymmetry(symmetry)
		}
		if (processingInstance.setSpacing) {
			processingInstance.setSpacing(spacing)
		}
		if (processingInstance.setRandomness) {
			processingInstance.setRandomness(randomness)
		}
		if (processingInstance.setIterations) {
			processingInstance.setIterations(iterations)
		}
		
		// Store current art data
		currentArtData = {
			pattern: pattern,
			complexity: complexity,
			lineWeight: lineWeight,
			density: density,
			scale: scale,
			rotation: rotation,
			symmetry: symmetry,
			spacing: spacing,
			randomness: randomness,
			iterations: iterations,
			timestamp: new Date().toISOString()
		}
		
		console.log('Art regenerated successfully:', currentArtData)
	} else {
		console.log('Processing instance not ready')
		alert('Please wait for the art generator to initialize...')
	}
}

function exportToPDF() {
	if (!processingInstance) {
		alert('Please wait for the art generator to load.')
		return
	}
	
	try {
		// Get canvas data
		const canvas = document.getElementById('artCanvas')
		const { jsPDF } = window.jspdf
		const pdf = new jsPDF({
			orientation: 'square',
			unit: 'mm',
			format: 'a4'
		})
		
		// Convert canvas to image
		const imgData = canvas.toDataURL('image/png')
		
		// Calculate dimensions to fit A4
		const pdfWidth = pdf.internal.pageSize.getWidth()
		const pdfHeight = pdf.internal.pageSize.getHeight()
		const imgWidth = canvas.width
		const imgHeight = canvas.height
		
		const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
		const finalWidth = imgWidth * ratio
		const finalHeight = imgHeight * ratio
		
		// Center the image
		const x = (pdfWidth - finalWidth) / 2
		const y = (pdfHeight - finalHeight) / 2
		
		// Add image to PDF
		pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight)
		
		// Add metadata
		if (currentArtData) {
			pdf.setProperties({
				title: `Vector Art - ${currentArtData.pattern}`,
				subject: 'Generated Vector Art for Plotter',
				author: 'Vector Art Generator',
				keywords: `pattern: ${currentArtData.pattern}, complexity: ${currentArtData.complexity}`
			})
		}
		
		// Download PDF
		const filename = `vector-art-${currentArtData?.pattern || 'art'}-${Date.now()}.pdf`
		pdf.save(filename)
		
		console.log('PDF exported successfully:', filename)
		
	} catch (error) {
		console.error('Error exporting PDF:', error)
		alert('Error exporting PDF. Please try again.')
	}
}

function exportToSVG() {
	if (!processingInstance) {
		alert('Please wait for the art generator to load.')
		return
	}
	
	try {
		// Get canvas data
		const canvas = document.getElementById('artCanvas')
		const ctx = canvas.getContext('2d')
		
		// Create SVG element
		const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
		svg.setAttribute('width', canvas.width)
		svg.setAttribute('height', canvas.height)
		svg.setAttribute('viewBox', `0 0 ${canvas.width} ${canvas.height}`)
		svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
		
		// Get image data from canvas
		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
		const data = imageData.data
		
		// Convert to SVG paths (simplified approach)
		// This is a basic implementation - for complex patterns, you might want to
		// implement a more sophisticated vectorization algorithm
		const svgContent = generateSVGFromPattern()
		
		// Create SVG file content
		const svgString = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<style>
			.line { fill: none; stroke: #000000; stroke-width: ${currentArtData?.lineWeight || 1}; }
		</style>
	</defs>
	${svgContent}
</svg>`
		
		// Create download link
		const blob = new Blob([svgString], { type: 'image/svg+xml' })
		const url = URL.createObjectURL(blob)
		const link = document.createElement('a')
		link.href = url
		link.download = `vector-art-${currentArtData?.pattern || 'art'}-${Date.now()}.svg`
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
		URL.revokeObjectURL(url)
		
		console.log('SVG exported successfully')
		
	} catch (error) {
		console.error('Error exporting SVG:', error)
		alert('Error exporting SVG. Please try again.')
	}
}

function generateSVGFromPattern() {
	if (!currentArtData) return ''
	
	const pattern = currentArtData.pattern
	const complexity = currentArtData.complexity
	const lineWeight = currentArtData.lineWeight
	const density = currentArtData.density || 1
	const scale = currentArtData.scale || 1
	const rotation = currentArtData.rotation || 0
	const symmetry = currentArtData.symmetry || 1
	const spacing = currentArtData.spacing || 1
	const randomness = currentArtData.randomness || 0
	const iterations = currentArtData.iterations || 5
	const centerX = 500
	const centerY = 500
	
	// Create parameters object
	const params = {
		centerX, centerY, complexity, density, scale, rotation, 
		symmetry, spacing, randomness, iterations
	}
	
	let svgContent = ''
	
	// Add main group with global transformation
	svgContent += `<g transform="translate(${centerX}, ${centerY}) rotate(${rotation}) scale(${scale}) translate(${-centerX}, ${-centerY})">\n`
	
	// Generate pattern with symmetry support
	for (let sym = 0; sym < symmetry; sym++) {
		const symRotation = (360 / symmetry) * sym
		svgContent += `  <g transform="translate(${centerX}, ${centerY}) rotate(${symRotation}) translate(${-centerX}, ${-centerY})">\n`
		
		switch (pattern) {
			case 'spiral':
				svgContent += `    ${generateSpiralSVG(params)}\n`
				break
			case 'galaxy':
				svgContent += `    ${generateGalaxySVG(params)}\n`
				break
			case 'constellation':
				svgContent += `    ${generateConstellationSVG(params)}\n`
				break
			case 'nebula':
				svgContent += `    ${generateNebulaSVG(params)}\n`
				break
			case 'tree':
				svgContent += `    ${generateTreeSVG(params)}\n`
				break
			case 'mandala':
				svgContent += `    ${generateMandalaSVG(params)}\n`
				break
			case 'radial':
				svgContent += `    ${generateRadialSVG(params)}\n`
				break
			case 'wave':
				svgContent += `    ${generateWaveSVG(params)}\n`
				break
			case 'grid':
				svgContent += `    ${generateGridSVG(params)}\n`
				break
			default:
				svgContent += `    ${generateDefaultSVG(params)}\n`
		}
		
		svgContent += `  </g>\n`
	}
	
	svgContent += `</g>\n`
	
	return svgContent
}

function generateSpiralSVG(params) {
	let svgContent = ''
	const numSpirals = Math.max(1, Math.floor(params.iterations / 2))
	
	// Helper function for SVG randomness
	function addSVGRandomness(x, y, randomness) {
		if (randomness <= 0) return { x, y }
		const randX = (Math.random() - 0.5) * randomness * 20
		const randY = (Math.random() - 0.5) * randomness * 20
		return { x: x + randX, y: y + randY }
	}
	
	for (let spiral = 0; spiral < numSpirals; spiral++) {
		let radius = (10 + spiral * 20) * params.spacing
		let angle = spiral * Math.PI / 4 // Offset each spiral slightly
		const angleStep = 0.1 * params.complexity * params.density
		const maxRadius = (300 + spiral * 50) * params.scale
		let path = ''
		let isFirstPoint = true
		
		while (radius < maxRadius) {
			let pos = {
				x: params.centerX + Math.cos(angle) * radius,
				y: params.centerY + Math.sin(angle) * radius
			}
			
			pos = addSVGRandomness(pos.x, pos.y, params.randomness)
			
			if (isFirstPoint) {
				path += `M ${pos.x.toFixed(2)} ${pos.y.toFixed(2)} `
				isFirstPoint = false
			} else {
				path += `L ${pos.x.toFixed(2)} ${pos.y.toFixed(2)} `
			}
			
			radius += (0.5 + spiral * 0.2) * params.spacing
			angle += angleStep
		}
		
		svgContent += `<path class="line" d="${path}"/>\n`
	}
	
	return svgContent
}

function generateGalaxySVG(params) {
	let svgContent = ''
	const numArms = 3 + Math.floor(params.complexity / 2)
	const armLength = 200 * params.scale
	
	// Helper function for SVG randomness
	function addSVGRandomness(x, y, randomness) {
		if (randomness <= 0) return { x, y }
		const randX = (Math.random() - 0.5) * randomness * 20
		const randY = (Math.random() - 0.5) * randomness * 20
		return { x: x + randX, y: y + randY }
	}
	
	for (let arm = 0; arm < numArms; arm++) {
		const armAngle = (2 * Math.PI / numArms) * arm
		let path = ''
		
		for (let i = 0; i < 100 * params.density; i++) {
			const t = i / (100 * params.density)
			const radius = t * armLength
			const angle = armAngle + t * 4 * Math.PI * params.complexity + Math.sin(t * 10) * 0.5
			
			let pos = {
				x: params.centerX + Math.cos(angle) * radius,
				y: params.centerY + Math.sin(angle) * radius
			}
			
			pos = addSVGRandomness(pos.x, pos.y, params.randomness)
			
			if (i === 0) {
				path += `M ${pos.x.toFixed(2)} ${pos.y.toFixed(2)} `
			} else {
				path += `L ${pos.x.toFixed(2)} ${pos.y.toFixed(2)} `
			}
		}
		
		svgContent += `<path class="line" d="${path}"/>\n`
	}
	
	return svgContent
}

function generateConstellationSVG(params) {
	const numStars = Math.floor(20 * params.complexity * params.density)
	const stars = []
	
	// Generate star positions
	for (let i = 0; i < numStars; i++) {
		stars.push({
			x: Math.random() * 800,
			y: Math.random() * 800
		})
	}
	
	let svgContent = ''
	
	// Draw connections between nearby stars
	for (let i = 0; i < stars.length; i++) {
		for (let j = i + 1; j < stars.length; j++) {
			const distance = Math.sqrt(
				Math.pow(stars[i].x - stars[j].x, 2) + 
				Math.pow(stars[i].y - stars[j].y, 2)
			)
			if (distance < 150) {
				svgContent += `<line class="line" x1="${stars[i].x}" y1="${stars[i].y}" x2="${stars[j].x}" y2="${stars[j].y}"/>`
			}
		}
	}
	
	return svgContent
}

function generateNebulaSVG(params) {
	let svgContent = ''
	const numCurves = Math.floor(10 * params.complexity * params.density)
	
	// Helper function for SVG randomness
	function addSVGRandomness(x, y, randomness) {
		if (randomness <= 0) return { x, y }
		const randX = (Math.random() - 0.5) * randomness * 20
		const randY = (Math.random() - 0.5) * randomness * 20
		return { x: x + randX, y: y + randY }
	}
	
	for (let i = 0; i < numCurves; i++) {
		let path = ''
		let firstPoint = true
		
		for (let t = 0; t <= 1; t += 0.01) {
			// Match exact nebula calculation from sketch.js
			const baseX = params.centerX + Math.cos(t * Math.PI * 4 + i) * (100 + Math.sin(t * 10) * 50)
			const baseY = params.centerY + Math.sin(t * Math.PI * 4 + i) * (100 + Math.cos(t * 10) * 50)
			
			let pos = addSVGRandomness(baseX, baseY, params.randomness)
			
			if (firstPoint) {
				path += `M ${pos.x.toFixed(2)} ${pos.y.toFixed(2)} `
				firstPoint = false
			} else {
				path += `L ${pos.x.toFixed(2)} ${pos.y.toFixed(2)} `
			}
		}
		
		svgContent += `<path class="line" d="${path}"/>\n`
	}
	
	return svgContent
}

function generateTreeSVG(params) {
	let svgContent = ''
	
	function drawBranch(x, y, angle, length, depth) {
		if (depth === 0) return
		
		const endX = x + Math.cos(angle) * length
		const endY = y + Math.sin(angle) * length
		
		svgContent += `<line class="line" x1="${x}" y1="${y}" x2="${endX}" y2="${endY}"/>`
		
		// Recursive branches
		drawBranch(endX, endY, angle + Math.PI/6, length * 0.7, depth - 1)
		drawBranch(endX, endY, angle - Math.PI/6, length * 0.7, depth - 1)
	}
	
	drawBranch(centerX, baseY, -Math.PI/2, 100, Math.min(complexity, 8))
	
	return svgContent
}

function generateMandalaSVG(params) {
	let svgContent = ''
	const numRings = 3 + complexity
	const baseRadius = 50
	
	for (let ring = 0; ring < numRings; ring++) {
		const radius = baseRadius + ring * 40
		const numElements = 8 + ring * 4
		
		for (let i = 0; i < numElements; i++) {
			const angle = (2 * Math.PI / numElements) * i
			const x1 = centerX + Math.cos(angle) * radius
			const y1 = centerY + Math.sin(angle) * radius
			const x2 = centerX + Math.cos(angle) * (radius + 20)
			const y2 = centerY + Math.sin(angle) * (radius + 20)
			
			svgContent += `<line class="line" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`
		}
	}
	
	return svgContent
}

function generateRadialSVG(params) {
	let svgContent = ''
	const numLines = Math.floor(20 * params.complexity * params.density)
	const radius = 350 * params.scale
	const innerRadius = 20 * params.spacing
	
	// Add randomness helper for SVG
	function addSVGRandomness(x, y, randomness) {
		if (randomness <= 0) return { x, y }
		const randX = (Math.random() - 0.5) * randomness * 10
		const randY = (Math.random() - 0.5) * randomness * 10
		return { x: x + randX, y: y + randY }
	}
	
	for (let i = 0; i < numLines; i++) {
		const angle = (2 * Math.PI / numLines) * i
		
		const radiusVariation = params.randomness > 0 ? 
			(0.8 + Math.random() * 0.4) : 1
		const currentRadius = radius * radiusVariation
		
		let pos1 = addSVGRandomness(
			params.centerX + Math.cos(angle) * innerRadius,
			params.centerY + Math.sin(angle) * innerRadius,
			params.randomness
		)
		
		let pos2 = addSVGRandomness(
			params.centerX + Math.cos(angle) * currentRadius,
			params.centerY + Math.sin(angle) * currentRadius,
			params.randomness
		)
		
		svgContent += `<line class="line" x1="${pos1.x}" y1="${pos1.y}" x2="${pos2.x}" y2="${pos2.y}"/>`
	}
	
	return svgContent
}

function generateWaveSVG(params) {
	let svgContent = ''
	const amplitude = 50 * complexity
	const frequency = 0.02 * complexity
	const yOffset = 400
	
	for (let wave = 0; wave < complexity; wave++) {
		let path = ''
		
		for (let x = 0; x < 800; x += 2) {
			const y = yOffset + Math.sin(x * frequency * (wave + 1)) * amplitude / (wave + 1)
			
			if (x === 0) {
				path += `M ${x} ${y} `
			} else {
				path += `L ${x} ${y} `
			}
		}
		
		svgContent += `<path class="line" d="${path}"/>`
	}
	
	return svgContent
}

function generateGridSVG(params) {
	let svgContent = ''
	const spacing = 20 / complexity
	let offset = 0
	
	// Vertical lines
	for (let x = 0; x < 800; x += spacing) {
		svgContent += `<line class="line" x1="${x + offset}" y1="0" x2="${x + offset}" y2="800"/>`
		offset += 0.5
	}
	
	// Horizontal lines
	offset = 0
	for (let y = 0; y < 800; y += spacing) {
		svgContent += `<line class="line" x1="0" y1="${y + offset}" x2="800" y2="${y + offset}"/>`
		offset += 0.5
	}
	
	return svgContent
}

function generateDefaultSVG(params) {
	// Fallback pattern - simple radial lines
	let svgContent = ''
	const numLines = Math.floor(12 * params.complexity * params.density)
	
	for (let i = 0; i < numLines; i++) {
		const angle = (2 * Math.PI / numLines) * i
		const x = params.centerX + Math.cos(angle) * 200 * params.scale
		const y = params.centerY + Math.sin(angle) * 200 * params.scale
		
		svgContent += `<line class="line" x1="${params.centerX}" y1="${params.centerY}" x2="${x}" y2="${y}"/>`
	}
	
	return svgContent
}

function exportToGCode() {
	if (!processingInstance) {
		alert('Please wait for the art generator to load.')
		return
	}
	
	try {
		console.log('Generating G-code...')
		
		// G-code settings for pen plotters
		const settings = {
			feedRate: 1000,        // Feed rate for drawing moves (mm/min)
			travelRate: 3000,      // Feed rate for travel moves (mm/min)
			penUpCommand: 'M3 S90',   // Servo command to lift pen (adjust for your plotter)
			penDownCommand: 'M3 S30', // Servo command to lower pen (adjust for your plotter)
			scaleX: 0.1,           // Scale factor for X axis (canvas units to mm)
			scaleY: 0.1,           // Scale factor for Y axis (canvas units to mm)
			offsetX: 0,            // X offset in mm
			offsetY: 0             // Y offset in mm
		}
		
		// Generate G-code content
		const gcodeContent = generateGCodeFromPattern(settings)
		
		// Create download link
		const blob = new Blob([gcodeContent], { type: 'text/plain' })
		const url = URL.createObjectURL(blob)
		const link = document.createElement('a')
		link.href = url
		link.download = `vector-art-${currentArtData?.pattern || 'art'}-${Date.now()}.gcode`
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
		URL.revokeObjectURL(url)
		
		console.log('G-code exported successfully')
		
	} catch (error) {
		console.error('Error exporting G-code:', error)
		alert('Error exporting G-code. Please try again.')
	}
}

function generateGCodeFromPattern(settings) {
	if (!currentArtData) return ''
	
	const pattern = currentArtData.pattern
	const complexity = currentArtData.complexity
	const lineWeight = currentArtData.lineWeight
	const density = currentArtData.density || 1
	const scale = currentArtData.scale || 1
	const rotation = currentArtData.rotation || 0
	const symmetry = currentArtData.symmetry || 1
	const spacing = currentArtData.spacing || 1
	const randomness = currentArtData.randomness || 0
	const iterations = currentArtData.iterations || 5
	const centerX = 500
	const centerY = 500
	
	let gcode = ''
	
	// G-code header
	gcode += '; Generated by Vector Art Generator\n'
	gcode += `; Pattern: ${pattern}\n`
	gcode += `; Complexity: ${complexity}\n`
	gcode += `; Line Weight: ${lineWeight}\n`
	gcode += `; Generated: ${new Date().toISOString()}\n`
	gcode += ';\n'
	gcode += 'G21 ; Set units to millimeters\n'
	gcode += 'G90 ; Absolute positioning\n'
	gcode += 'G28 ; Home all axes\n'
	gcode += `${settings.penUpCommand} ; Pen up\n`
	gcode += 'G4 P500 ; Wait 500ms\n'
	gcode += '\n'
	
	// Create parameters object
	const params = {
		centerX, centerY, complexity, density, scale, rotation, 
		symmetry, spacing, randomness, iterations
	}
	
	// Generate pattern-specific G-code with symmetry support
	for (let sym = 0; sym < symmetry; sym++) {
		gcode += `; Symmetry iteration ${sym + 1} of ${symmetry}\n`
		const symRotation = rotation + (360 / symmetry) * sym
		const symParams = { ...params, rotation: symRotation }
		
		switch (pattern) {
			case 'spiral':
				gcode += generateSpiralGCode(symParams, settings)
				break
			case 'galaxy':
				gcode += generateGalaxyGCode(symParams, settings)
				break
			case 'constellation':
				gcode += generateConstellationGCode(symParams, settings)
				break
			case 'nebula':
				gcode += generateNebulaGCode(symParams, settings)
				break
			case 'tree':
				gcode += generateTreeGCode(symParams, settings)
				break
			case 'mandala':
				gcode += generateMandalaGCode(symParams, settings)
				break
			case 'radial':
				gcode += generateRadialGCode(symParams, settings)
				break
			case 'wave':
				gcode += generateWaveGCode(symParams, settings)
				break
			case 'grid':
				gcode += generateGridGCode(symParams, settings)
				break
			default:
				gcode += generateDefaultGCode(symParams, settings)
		}
	}
	
	// G-code footer
	gcode += '\n'
	gcode += `${settings.penUpCommand} ; Pen up\n`
	gcode += 'G4 P500 ; Wait 500ms\n'
	gcode += 'G28 ; Home all axes\n'
	gcode += 'M30 ; Program end\n'
	
	return gcode
}

function gcodeMoveTo(x, y, settings, penDown = false) {
	const scaledX = (x * settings.scaleX + settings.offsetX).toFixed(3)
	const scaledY = (y * settings.scaleY + settings.offsetY).toFixed(3)
	const feedRate = penDown ? settings.feedRate : settings.travelRate
	
	let gcode = ''
	if (penDown) {
		gcode += `G1 X${scaledX} Y${scaledY} F${feedRate}\n`
	} else {
		gcode += `G0 X${scaledX} Y${scaledY} F${feedRate}\n`
	}
	return gcode
}

function gcodeLineTo(x1, y1, x2, y2, settings) {
	let gcode = ''
	gcode += gcodeMoveTo(x1, y1, settings, false) // Move to start without pen
	gcode += `${settings.penDownCommand} ; Pen down\n`
	gcode += 'G4 P200 ; Wait 200ms\n'
	gcode += gcodeMoveTo(x2, y2, settings, true) // Draw to end
	gcode += `${settings.penUpCommand} ; Pen up\n`
	gcode += 'G4 P200 ; Wait 200ms\n'
	return gcode
}

// New function for continuous path generation
function gcodeBeginPath(x, y, settings) {
	let gcode = ''
	gcode += gcodeMoveTo(x, y, settings, false)
	gcode += `${settings.penDownCommand} ; Pen down\n`
	gcode += 'G4 P200 ; Wait 200ms\n'
	return gcode
}

function gcodeEndPath(settings) {
	let gcode = ''
	gcode += `${settings.penUpCommand} ; Pen up\n`
	gcode += 'G4 P200 ; Wait 200ms\n'
	return gcode
}

function gcodePathLineTo(x, y, settings) {
	return gcodeMoveTo(x, y, settings, true)
}

function transformPoint(x, y, params) {
	const centerX = params.centerX
	const centerY = params.centerY
	const scale = params.scale || 1
	const rotation = params.rotation || 0
	
	// Translate to origin
	let tx = x - centerX
	let ty = y - centerY
	
	// Apply scale
	tx *= scale
	ty *= scale
	
	// Apply rotation
	const rad = rotation * Math.PI / 180
	const cos = Math.cos(rad)
	const sin = Math.sin(rad)
	const rx = tx * cos - ty * sin
	const ry = tx * sin + ty * cos
	
	// Translate back
	return {
		x: rx + centerX,
		y: ry + centerY
	}
}

function addRandomness(x, y, randomness) {
	if (randomness <= 0) return { x, y }
	
	const randX = (Math.random() - 0.5) * randomness * 20
	const randY = (Math.random() - 0.5) * randomness * 20
	
	return {
		x: x + randX,
		y: y + randY
	}
}

function generateSpiralGCode(params, settings) {
	let gcode = '; Spiral pattern\n'
	const numSpirals = Math.max(1, Math.floor(params.iterations / 2))
	
	for (let spiral = 0; spiral < numSpirals; spiral++) {
		let radius = (10 + spiral * 20) * params.spacing
		let angle = spiral * Math.PI / 4 // Offset each spiral slightly
		const angleStep = 0.1 * params.complexity * params.density
		const maxRadius = (300 + spiral * 50) * params.scale
		
		// Start the continuous path
		let pos = {
			x: params.centerX + Math.cos(angle) * radius,
			y: params.centerY + Math.sin(angle) * radius
		}
		pos = addRandomness(pos.x, pos.y, params.randomness)
		pos = transformPoint(pos.x, pos.y, params)
		
		gcode += gcodeBeginPath(pos.x, pos.y, settings)
		
		// Draw continuous spiral
		while (radius < maxRadius) {
			radius += (0.5 + spiral * 0.2) * params.spacing
			angle += angleStep
			
			pos = {
				x: params.centerX + Math.cos(angle) * radius,
				y: params.centerY + Math.sin(angle) * radius
			}
			
			pos = addRandomness(pos.x, pos.y, params.randomness)
			pos = transformPoint(pos.x, pos.y, params)
			
			gcode += gcodePathLineTo(pos.x, pos.y, settings)
		}
		
		gcode += gcodeEndPath(settings)
	}
	
	return gcode
}

function generateGalaxyGCode(params, settings) {
	let gcode = '; Galaxy pattern\n'
	const numArms = 3 + Math.floor(params.complexity / 2)
	const armLength = 200 * params.scale
	
	for (let arm = 0; arm < numArms; arm++) {
		const armAngle = (2 * Math.PI / numArms) * arm
		let firstPoint = true
		
		for (let i = 0; i < 100 * params.density; i++) {
			const t = i / (100 * params.density)
			const radius = t * armLength
			const angle = armAngle + t * 4 * Math.PI * params.complexity + Math.sin(t * 10) * 0.5
			
			let pos = {
				x: params.centerX + Math.cos(angle) * radius,
				y: params.centerY + Math.sin(angle) * radius
			}
			
			pos = addRandomness(pos.x, pos.y, params.randomness)
			pos = transformPoint(pos.x, pos.y, params)
			
			if (firstPoint) {
				gcode += gcodeBeginPath(pos.x, pos.y, settings)
				firstPoint = false
			} else {
				gcode += gcodePathLineTo(pos.x, pos.y, settings)
			}
		}
		
		gcode += gcodeEndPath(settings)
	}
	
	return gcode
}

function generateConstellationGCode(params, settings) {
	let gcode = '; Constellation pattern\n'
	const numStars = Math.floor(20 * params.complexity * params.density)
	const stars = []
	
	// Generate star positions
	for (let i = 0; i < numStars; i++) {
		stars.push({
			x: Math.random() * 800,
			y: Math.random() * 800
		})
	}
	
	// Draw connections between nearby stars
	for (let i = 0; i < stars.length; i++) {
		for (let j = i + 1; j < stars.length; j++) {
			const distance = Math.sqrt(
				Math.pow(stars[i].x - stars[j].x, 2) + 
				Math.pow(stars[i].y - stars[j].y, 2)
			)
			if (distance < 150) {
				gcode += gcodeLineTo(stars[i].x, stars[i].y, stars[j].x, stars[j].y, settings)
			}
		}
	}
	
	return gcode
}

function generateNebulaGCode(params, settings) {
	let gcode = '; Nebula pattern\n'
	const numCurves = Math.floor(10 * params.complexity * params.density)
	
	for (let i = 0; i < numCurves; i++) {
		let firstPoint = true
		
		for (let t = 0; t <= 1; t += 0.01) {
			// Match exact nebula calculation from sketch.js
			const baseX = params.centerX + Math.cos(t * Math.PI * 4 + i) * (100 + Math.sin(t * 10) * 50)
			const baseY = params.centerY + Math.sin(t * Math.PI * 4 + i) * (100 + Math.cos(t * 10) * 50)
			
			let pos = { x: baseX, y: baseY }
			pos = addRandomness(pos.x, pos.y, params.randomness)
			pos = transformPoint(pos.x, pos.y, params)
			
			if (firstPoint) {
				gcode += gcodeBeginPath(pos.x, pos.y, settings)
				firstPoint = false
			} else {
				gcode += gcodePathLineTo(pos.x, pos.y, settings)
			}
		}
		
		gcode += gcodeEndPath(settings)
	}
	
	return gcode
}

function generateTreeGCode(params, settings) {
	let gcode = '; Tree pattern\n'
	
	function drawBranch(x, y, angle, length, depth, parentGcode) {
		if (depth === 0) return parentGcode
		
		const endX = x + Math.cos(angle) * length
		const endY = y + Math.sin(angle) * length
		
		parentGcode += gcodeLineTo(x, y, endX, endY, settings)
		
		// Recursive branches
		parentGcode = drawBranch(endX, endY, angle + Math.PI/6, length * 0.7, depth - 1, parentGcode)
		parentGcode = drawBranch(endX, endY, angle - Math.PI/6, length * 0.7, depth - 1, parentGcode)
		
		return parentGcode
	}
	
	gcode = drawBranch(centerX, baseY, -Math.PI/2, 100, Math.min(complexity, 8), gcode)
	
	return gcode
}

function generateMandalaGCode(params, settings) {
	let gcode = '; Mandala pattern\n'
	const numRings = 3 + complexity
	const baseRadius = 50
	
	for (let ring = 0; ring < numRings; ring++) {
		const radius = baseRadius + ring * 40
		const numElements = 8 + ring * 4
		
		for (let i = 0; i < numElements; i++) {
			const angle = (2 * Math.PI / numElements) * i
			const x1 = centerX + Math.cos(angle) * radius
			const y1 = centerY + Math.sin(angle) * radius
			const x2 = centerX + Math.cos(angle) * (radius + 20)
			const y2 = centerY + Math.sin(angle) * (radius + 20)
			
			gcode += gcodeLineTo(x1, y1, x2, y2, settings)
		}
	}
	
	return gcode
}

function generateRadialGCode(params, settings) {
	let gcode = '; Radial pattern\n'
	const numLines = Math.floor(20 * params.complexity * params.density)
	const radius = 350 * params.scale
	const innerRadius = 20 * params.spacing
	
	for (let i = 0; i < numLines; i++) {
		const angle = (2 * Math.PI / numLines) * i
		
		// Calculate base positions
		let pos1 = {
			x: params.centerX + Math.cos(angle) * innerRadius,
			y: params.centerY + Math.sin(angle) * innerRadius
		}
		
		const radiusVariation = params.randomness > 0 ? 
			(0.8 + Math.random() * 0.4) : 1
		const currentRadius = radius * radiusVariation
		
		let pos2 = {
			x: params.centerX + Math.cos(angle) * currentRadius,
			y: params.centerY + Math.sin(angle) * currentRadius
		}
		
		// Apply randomness and transformations
		pos1 = addRandomness(pos1.x, pos1.y, params.randomness)
		pos2 = addRandomness(pos2.x, pos2.y, params.randomness)
		pos1 = transformPoint(pos1.x, pos1.y, params)
		pos2 = transformPoint(pos2.x, pos2.y, params)
		
		gcode += gcodeLineTo(pos1.x, pos1.y, pos2.x, pos2.y, settings)
	}
	
	return gcode
}

function generateWaveGCode(params, settings) {
	let gcode = '; Wave pattern\n'
	const amplitude = 50 * params.complexity * params.scale
	const frequency = 0.02 * params.complexity
	const yOffset = params.centerY
	const numWaves = Math.max(1, Math.floor(params.iterations))
	
	for (let wave = 0; wave < numWaves; wave++) {
		let firstPoint = true
		const waveOffset = wave * 100 - (numWaves * 50)
		
		for (let x = 0; x < 1000; x += 2 / params.density) {
			const y = yOffset + waveOffset + Math.sin((x - params.centerX) * frequency * (wave + 1)) * amplitude / (wave + 1)
			
			let pos = { x, y }
			pos = addRandomness(pos.x, pos.y, params.randomness)
			pos = transformPoint(pos.x, pos.y, params)
			
			if (firstPoint) {
				gcode += gcodeBeginPath(pos.x, pos.y, settings)
				firstPoint = false
			} else {
				gcode += gcodePathLineTo(pos.x, pos.y, settings)
			}
		}
		
		gcode += gcodeEndPath(settings)
	}
	
	return gcode
}

function generateGridGCode(params, settings) {
	let gcode = '; Grid pattern\n'
	const spacing = 20 / complexity
	let offset = 0
	
	// Vertical lines
	for (let x = 0; x < 800; x += spacing) {
		gcode += gcodeLineTo(x + offset, 0, x + offset, 800, settings)
		offset += 0.5
	}
	
	// Horizontal lines
	offset = 0
	for (let y = 0; y < 800; y += spacing) {
		gcode += gcodeLineTo(0, y + offset, 800, y + offset, settings)
		offset += 0.5
	}
	
	return gcode
}

function generateDefaultGCode(params, settings) {
	let gcode = '; Default radial pattern\n'
	const numLines = Math.floor(12 * params.complexity * params.density)
	
	for (let i = 0; i < numLines; i++) {
		const angle = (2 * Math.PI / numLines) * i
		
		let pos1 = { x: params.centerX, y: params.centerY }
		let pos2 = {
			x: params.centerX + Math.cos(angle) * 200 * params.scale,
			y: params.centerY + Math.sin(angle) * 200 * params.scale
		}
		
		// Apply transformations
		pos1 = transformPoint(pos1.x, pos1.y, params)
		pos2 = transformPoint(pos2.x, pos2.y, params)
		
		gcode += gcodeLineTo(pos1.x, pos1.y, pos2.x, pos2.y, settings)
	}
	
	return gcode
}