/* eslint-disable no-param-reassign */
import { useRef, useEffect, FC } from "react"

const ParticleBackground: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")

    if (canvas) {
      // Set canvas dimensions
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Helper function to create particles
    const createParticle = () => ({
      x: Math.random() * (canvas?.width || 0),
      y: Math.random() * (canvas?.height || 0),
      radius: Math.random() * 5 + 1,
      color: `rgba(255, 255, 255, ${Math.random()})`,
      speedX: 0.4 * 2 - 1,
      speedY: 0.4 * 2 - 1
    })

    // Initialize particles
    const particleCount = 8
    let particles = Array.from({ length: particleCount }, createParticle)

    // Draw a particle
    const drawParticle = (particle: { x: number; y: number }) => {
      if (ctx) {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 100, 0, Math.PI * 2)
        ctx.fillStyle = "#1461A4"
        ctx.fill()
      }
    }

    // Update a particle's position and behavior
    const updateParticle = (particle: { x: number; y: number; speedX: number; speedY: number }) => {
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Bounce off edges
      if (particle.x < 0 || particle.x > (canvas?.width || 0)) particle.speedX *= -1
      if (particle.y < 0 || particle.y > (canvas?.height || 0)) particle.speedY *= -1
    }

    // Animation loop
    const animate = () => {
      ctx?.clearRect(0, 0, canvas?.width || 0, canvas?.height || 0)

      // Update and draw each particle
      particles.forEach(particle => {
        updateParticle(particle)
        drawParticle(particle)
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Resize event listener
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      // Recreate particles on resize
      particles = Array.from({ length: particleCount }, createParticle) 
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ zIndex: "-20", position: "absolute", filter: "blur(5px)" }} />
}

export default ParticleBackground
