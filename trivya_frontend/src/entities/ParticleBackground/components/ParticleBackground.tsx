/* eslint-disable no-param-reassign */
import { useRef, useEffect, FC } from "react"

const ParticleBackground: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")

    if (canvas) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = () => ({
      x: Math.random() * (canvas?.width || 0),
      y: Math.random() * (canvas?.height || 0),
      radius: Math.random() * 5 + 1,
      color: `rgba(255, 255, 255, ${Math.random()})`,
      speedX: 0.4 * 2 - 1,
      speedY: 0.4 * 2 - 1
    })

    const particleCount = 8
    let particles = Array.from({ length: particleCount }, createParticle)

    const drawParticle = (particle: { x: number; y: number }) => {
      if (ctx) {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 100, 0, Math.PI * 2)
        ctx.fillStyle = "#1461A4"
        ctx.fill()
      }
    }

    const updateParticle = (particle: { x: number; y: number; speedX: number; speedY: number }) => {
      particle.x += particle.speedX
      particle.y += particle.speedY

      if (particle.x < 0 || particle.x > (canvas?.width || 0)) particle.speedX *= -1
      if (particle.y < 0 || particle.y > (canvas?.height || 0)) particle.speedY *= -1
    }

    const animate = () => {
      ctx?.clearRect(0, 0, canvas?.width || 0, canvas?.height || 0)

      particles.forEach(particle => {
        updateParticle(particle)
        drawParticle(particle)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      particles = Array.from({ length: particleCount }, createParticle) 
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ zIndex: "-20", position: "absolute", filter: "blur(5px)" }} />
}

export default ParticleBackground
