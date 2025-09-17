// Vector Art Generator - Universe-Inspired Patterns
// Processing.js sketch for generating plotter-ready art

var sketch = function(p) {
	var currentPattern = 'spiral'
	var complexity = 5
	var lineWeight = 1
	var density = 1
	var scale = 1
	var rotation = 0
	var symmetry = 1
	var spacing = 1
	var randomness = 0
	var iterations = 5
	var centerX, centerY

	p.setup = function() {
		p.size(1000, 1000)
		centerX = p.width / 2
		centerY = p.height / 2
		
		console.log('Processing.js setup completed')
		console.log('Canvas size:', p.width, 'x', p.height)
		console.log('Center:', centerX, centerY)
		
		// Initialize pattern
		generatePattern()
	}

	p.draw = function() {
		// Static patterns - no animation needed for plotter output
	}

	function generatePattern() {
		console.log('generatePattern called with pattern:', currentPattern, 'complexity:', complexity, 'lineWeight:', lineWeight, 'density:', density, 'scale:', scale, 'rotation:', rotation)
		
		// Clear canvas with white background
		p.background(255, 255, 255)
		
		// Set black stroke for drawing
		p.stroke(0, 0, 0)
		p.strokeWeight(lineWeight)
		p.noFill()
		
		// Apply global transformations
		p.pushMatrix()
		p.translate(centerX, centerY)
		p.rotate(p.radians(rotation))
		p.scale(scale)
		p.translate(-centerX, -centerY)
		
		// Draw multiple iterations if symmetry > 1
		for (var sym = 0; sym < symmetry; sym++) {
			p.pushMatrix()
			p.translate(centerX, centerY)
			p.rotate((p.TWO_PI / symmetry) * sym)
			p.translate(-centerX, -centerY)
			
			switch(currentPattern) {
			case 'spiral':
				drawSpiral()
				break
			case 'grid':
				drawGrid()
				break
			case 'radial':
				drawRadial()
				break
			case 'wave':
				drawWave()
				break
			case 'tree':
				drawFractalTree()
				break
			case 'random':
				drawRandomLines()
				break
			case 'galaxy':
				drawGalaxy()
				break
			case 'constellation':
				drawConstellation()
				break
			case 'nebula':
				drawNebula()
				break
			case 'crystal':
				drawCrystal()
				break
			case 'molecule':
				drawMolecule()
				break
			case 'dna':
				drawDNA()
				break
			case 'flower':
				drawFlower()
				break
			case 'snowflake':
				drawSnowflake()
				break
			case 'mandala':
				drawMandala()
				break
			case 'lattice':
				drawLattice()
				break
			case 'voronoi':
				drawVoronoi()
				break
			case 'flow':
				drawFlow()
				break
			case 'orbit':
				drawOrbit()
				break
		}
		
		p.popMatrix() // End symmetry transformation
		}
		
		p.popMatrix() // End global transformation
	}

	function drawSpiral() {
		var radius = 10 * spacing
		var angle = 0
		var angleStep = 0.1 * complexity * density
		var maxRadius = (p.width/2 - 50) * scale
		var numPoints = Math.floor(1000 * density)
		
		p.beginShape()
		p.noFill()
		for (var i = 0; i < numPoints; i++) {
			// Add randomness to position
			var randX = randomness > 0 ? p.random(-randomness * 10, randomness * 10) : 0
			var randY = randomness > 0 ? p.random(-randomness * 10, randomness * 10) : 0
			
			var x = centerX + p.cos(angle) * radius + randX
			var y = centerY + p.sin(angle) * radius + randY
			
			if (i === 0) {
				p.vertex(x, y)
			} else {
				p.vertex(x, y)
			}
			
			radius += 0.5 * spacing
			angle += angleStep
			
			if (radius > maxRadius) break
		}
		p.endShape()
	}

	function drawGrid() {
		var gridSpacing = (20 / complexity) * spacing
		var offset = 0
		var numIterations = Math.max(1, iterations)
		
		for (var iter = 0; iter < numIterations; iter++) {
			var alpha = 1.0 / numIterations
			var currentSpacing = gridSpacing * (1 + iter * 0.1)
			
			// Vertical lines
			for (var x = 0; x < p.width; x += currentSpacing * density) {
				var randOffset = randomness > 0 ? p.random(-randomness * 5, randomness * 5) : 0
				p.line(x + offset + randOffset, 0, x + offset + randOffset, p.height)
				offset += 0.5 * spacing
			}
			
			// Horizontal lines
			offset = 0
			for (var y = 0; y < p.height; y += currentSpacing * density) {
				var randOffset = randomness > 0 ? p.random(-randomness * 5, randomness * 5) : 0
				p.line(0, y + offset + randOffset, p.width, y + offset + randOffset)
				offset += 0.5 * spacing
			}
		}
	}

	function drawRadial() {
		var numLines = Math.floor(20 * complexity * density)
		var radius = (p.min(p.width, p.height) / 2 - 50) * scale
		var innerRadius = 20 * spacing
		
		for (var i = 0; i < numLines; i++) {
			var angle = (p.TWO_PI / numLines) * i
			
			// Add randomness to radius
			var radiusVariation = randomness > 0 ? p.random(0.8, 1.2) : 1
			var currentRadius = radius * radiusVariation
			
			var x1 = centerX + p.cos(angle) * innerRadius
			var y1 = centerY + p.sin(angle) * innerRadius
			var x2 = centerX + p.cos(angle) * currentRadius
			var y2 = centerY + p.sin(angle) * currentRadius
			
			p.line(x1, y1, x2, y2)
		}
	}

	function drawWave() {
		var amplitude = 50 * complexity
		var frequency = 0.02 * complexity
		var yOffset = centerY
		
		p.beginShape()
		for (var x = 0; x < p.width; x += 2) {
			var y = yOffset + p.sin(x * frequency) * amplitude
			p.vertex(x, y)
		}
		p.endShape()
		
		// Add multiple waves
		for (var i = 1; i < complexity; i++) {
			p.beginShape()
			for (var x = 0; x < p.width; x += 2) {
				var y = yOffset + p.sin(x * frequency * (i + 1)) * amplitude / (i + 1)
				p.vertex(x, y)
			}
			p.endShape()
		}
	}

	function drawFractalTree() {
		p.strokeWeight(lineWeight)
		p.pushMatrix()
		p.translate(centerX, p.height - 50)
		drawBranch(0, -100, 8)
		p.popMatrix()
	}

	function drawBranch(x, y, depth) {
		if (depth === 0) return
		
		p.line(0, 0, x, y)
		
		p.pushMatrix()
		p.translate(x, y)
		p.rotate(p.PI/6)
		drawBranch(x * 0.7, y * 0.7, depth - 1)
		p.popMatrix()
		
		p.pushMatrix()
		p.translate(x, y)
		p.rotate(-p.PI/6)
		drawBranch(x * 0.7, y * 0.7, depth - 1)
		p.popMatrix()
	}

	function drawRandomLines() {
		for (var i = 0; i < 50 * complexity; i++) {
			var x1 = p.random(p.width)
			var y1 = p.random(p.height)
			var x2 = p.random(p.width)
			var y2 = p.random(p.height)
			p.line(x1, y1, x2, y2)
		}
	}

	function drawGalaxy() {
		var numArms = 3 + p.floor(complexity / 2)
		var armLength = 200
		
		for (var arm = 0; arm < numArms; arm++) {
			var armAngle = (p.TWO_PI / numArms) * arm
			
			p.beginShape()
			for (var i = 0; i < 100; i++) {
				var t = i / 100
				var radius = t * armLength
				var angle = armAngle + t * 4 * p.PI + p.sin(t * 10) * 0.5
				
				var x = centerX + p.cos(angle) * radius
				var y = centerY + p.sin(angle) * radius
				
				if (i === 0) {
					p.vertex(x, y)
				} else {
					p.vertex(x, y)
				}
			}
			p.endShape()
		}
	}

	function drawConstellation() {
		var numStars = Math.floor(20 * complexity * density)
		var stars = []
		
		// Generate star positions
		for (var i = 0; i < numStars; i++) {
			stars.push({
				x: p.random(p.width),
				y: p.random(p.height)
			})
		}
		
		// Draw connections between nearby stars
		for (var i = 0; i < stars.length; i++) {
			for (var j = i + 1; j < stars.length; j++) {
				var distance = p.dist(stars[i].x, stars[i].y, stars[j].x, stars[j].y)
				if (distance < 150) {
					p.line(stars[i].x, stars[i].y, stars[j].x, stars[j].y)
				}
			}
		}
	}

	function drawNebula() {
		var numCurves = 10 * complexity
		
		for (var i = 0; i < numCurves; i++) {
			p.beginShape()
			for (var t = 0; t < 1; t += 0.01) {
				var x = centerX + p.cos(t * p.TWO_PI * 2 + i) * (100 + p.sin(t * 10) * 50)
				var y = centerY + p.sin(t * p.TWO_PI * 2 + i) * (100 + p.cos(t * 10) * 50)
				p.vertex(x, y)
			}
			p.endShape()
		}
	}

	function drawCrystal() {
		var numFaces = 6 + complexity
		var radius = 150
		
		for (var i = 0; i < numFaces; i++) {
			var angle1 = (p.TWO_PI / numFaces) * i
			var angle2 = (p.TWO_PI / numFaces) * ((i + 1) % numFaces)
			
			var x1 = centerX + p.cos(angle1) * radius
			var y1 = centerY + p.sin(angle1) * radius
			var x2 = centerX + p.cos(angle2) * radius
			var y2 = centerY + p.sin(angle2) * radius
			
			p.line(centerX, centerY, x1, y1)
			p.line(x1, y1, x2, y2)
		}
	}

	function drawMolecule() {
		var numAtoms = 8 + complexity * 2
		var atoms = []
		
		// Generate atom positions
		for (var i = 0; i < numAtoms; i++) {
			atoms.push({
				x: centerX + p.random(-150, 150),
				y: centerY + p.random(-150, 150)
			})
		}
		
		// Draw bonds between nearby atoms
		for (var i = 0; i < atoms.length; i++) {
			for (var j = i + 1; j < atoms.length; j++) {
				var distance = p.dist(atoms[i].x, atoms[i].y, atoms[j].x, atoms[j].y)
				if (distance < 80) {
					p.line(atoms[i].x, atoms[i].y, atoms[j].x, atoms[j].y)
				}
			}
		}
	}

	function drawDNA() {
		var height = 200
		var width = 50
		var turns = 5 * complexity
		
		p.beginShape()
		for (var i = 0; i < 100; i++) {
			var t = i / 100
			var x = centerX + p.cos(t * turns * p.TWO_PI) * width
			var y = centerY + t * height - height/2
			p.vertex(x, y)
		}
		p.endShape()
		
		p.beginShape()
		for (var i = 0; i < 100; i++) {
			var t = i / 100
			var x = centerX + p.cos(t * turns * p.TWO_PI + p.PI) * width
			var y = centerY + t * height - height/2
			p.vertex(x, y)
		}
		p.endShape()
		
		// Draw connecting lines
		for (var i = 0; i < 20; i++) {
			var t = i / 20
			var x1 = centerX + p.cos(t * turns * p.TWO_PI) * width
			var y1 = centerY + t * height - height/2
			var x2 = centerX + p.cos(t * turns * p.TWO_PI + p.PI) * width
			var y2 = centerY + t * height - height/2
			p.line(x1, y1, x2, y2)
		}
	}

	function drawFlower() {
		var numPetals = 8 + complexity
		var petalLength = 100
		
		for (var i = 0; i < numPetals; i++) {
			var angle = (p.TWO_PI / numPetals) * i
			
			p.beginShape()
			p.vertex(centerX, centerY)
			for (var t = 0; t <= 1; t += 0.1) {
				var radius = t * petalLength
				var petalWidth = p.sin(t * p.PI) * 20
				var x = centerX + p.cos(angle) * radius + p.cos(angle + p.PI/2) * petalWidth
				var y = centerY + p.sin(angle) * radius + p.sin(angle + p.PI/2) * petalWidth
				p.vertex(x, y)
			}
			p.endShape()
		}
	}

	function drawSnowflake() {
		var numBranches = 6
		var branchLength = 80
		
		for (var i = 0; i < numBranches; i++) {
			var angle = (p.TWO_PI / numBranches) * i
			
			p.pushMatrix()
			p.translate(centerX, centerY)
			p.rotate(angle)
			drawSnowflakeBranch(branchLength, complexity)
			p.popMatrix()
		}
	}

	function drawSnowflakeBranch(length, depth) {
		if (depth === 0) return
		
		p.line(0, 0, length, 0)
		
		p.pushMatrix()
		p.translate(length, 0)
		p.rotate(p.PI/6)
		drawSnowflakeBranch(length * 0.4, depth - 1)
		p.popMatrix()
		
		p.pushMatrix()
		p.translate(length, 0)
		p.rotate(-p.PI/6)
		drawSnowflakeBranch(length * 0.4, depth - 1)
		p.popMatrix()
	}

	function drawMandala() {
		var numRings = 3 + complexity
		var baseRadius = 50
		
		for (var ring = 0; ring < numRings; ring++) {
			var radius = baseRadius + ring * 40
			var numElements = 8 + ring * 4
			
			for (var i = 0; i < numElements; i++) {
				var angle = (p.TWO_PI / numElements) * i
				var x1 = centerX + p.cos(angle) * radius
				var y1 = centerY + p.sin(angle) * radius
				var x2 = centerX + p.cos(angle) * (radius + 20)
				var y2 = centerY + p.sin(angle) * (radius + 20)
				
				p.line(x1, y1, x2, y2)
			}
		}
	}

	function drawLattice() {
		var cellSize = 30 / complexity
		var offset = 0
		
		for (var x = 0; x < p.width; x += cellSize) {
			for (var y = 0; y < p.height; y += cellSize) {
				if ((x + y) % (cellSize * 2) === 0) {
					p.rect(x + offset, y + offset, cellSize, cellSize)
				}
			}
			offset += 0.5
		}
	}

	function drawVoronoi() {
		var numPoints = 15 * complexity
		var points = []
		
		// Generate random points
		for (var i = 0; i < numPoints; i++) {
			points.push({
				x: p.random(p.width),
				y: p.random(p.height)
			})
		}
		
		// Draw connections to nearest neighbors
		for (var i = 0; i < points.length; i++) {
			var distances = []
			for (var j = 0; j < points.length; j++) {
				if (i !== j) {
					distances.push({
						index: j,
						distance: p.dist(points[i].x, points[i].y, points[j].x, points[j].y)
					})
				}
			}
			
			distances.sort(function(a, b) { return a.distance - b.distance })
			
			// Connect to 3 nearest neighbors
			for (var k = 0; k < p.min(3, distances.length); k++) {
				var neighbor = distances[k]
				p.line(points[i].x, points[i].y, points[neighbor.index].x, points[neighbor.index].y)
			}
		}
	}

	function drawFlow() {
		var numStreams = 5 * complexity
		
		for (var stream = 0; stream < numStreams; stream++) {
			p.beginShape()
			var x = p.random(p.width)
			var y = p.random(p.height)
			p.vertex(x, y)
			
			for (var i = 0; i < 50; i++) {
				x += p.random(-20, 20)
				y += p.random(-20, 20)
				p.vertex(x, y)
			}
			p.endShape()
		}
	}

	function drawOrbit() {
		var numOrbits = 3 + complexity
		var baseRadius = 50
		
		for (var orbit = 0; orbit < numOrbits; orbit++) {
			var radius = baseRadius + orbit * 60
			p.ellipse(centerX, centerY, radius * 2, radius * 2)
			
			// Add orbital objects
			var numObjects = 3 + orbit
			for (var i = 0; i < numObjects; i++) {
				var angle = (p.TWO_PI / numObjects) * i
				var x = centerX + p.cos(angle) * radius
				var y = centerY + p.sin(angle) * radius
				p.ellipse(x, y, 10, 10)
			}
		}
	}

	// Export functions for getting vector data
	p.getVectorData = function() {
		return {
			pattern: currentPattern,
			complexity: complexity,
			lineWeight: lineWeight,
			density: density,
			scale: scale,
			rotation: rotation,
			symmetry: symmetry,
			spacing: spacing,
			randomness: randomness,
			iterations: iterations,
			width: p.width,
			height: p.height
		}
	}

	p.setPattern = function(pattern) {
		console.log('setPattern called with:', pattern)
		currentPattern = pattern
		generatePattern()
	}

	p.setComplexity = function(comp) {
		console.log('setComplexity called with:', comp)
		complexity = comp
		generatePattern()
	}

	p.setLineWeight = function(weight) {
		console.log('setLineWeight called with:', weight)
		lineWeight = weight
		p.strokeWeight(lineWeight)
		generatePattern()
	}
	
	p.setDensity = function(d) {
		console.log('setDensity called with:', d)
		density = d
		generatePattern()
	}
	
	p.setScale = function(s) {
		console.log('setScale called with:', s)
		scale = s
		generatePattern()
	}
	
	p.setRotation = function(r) {
		console.log('setRotation called with:', r)
		rotation = r
		generatePattern()
	}
	
	p.setSymmetry = function(sym) {
		console.log('setSymmetry called with:', sym)
		symmetry = sym
		generatePattern()
	}
	
	p.setSpacing = function(sp) {
		console.log('setSpacing called with:', sp)
		spacing = sp
		generatePattern()
	}
	
	p.setRandomness = function(rand) {
		console.log('setRandomness called with:', rand)
		randomness = rand
		generatePattern()
	}
	
	p.setIterations = function(iter) {
		console.log('setIterations called with:', iter)
		iterations = iter
		generatePattern()
	}
}