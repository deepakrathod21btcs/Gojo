import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Sparkles, Stars } from '@react-three/drei'

function GojoOrb() {
  const groupRef = useRef()
  const knotRef = useRef()

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35
    }
    if (knotRef.current) {
      knotRef.current.rotation.x += delta * 0.9
      knotRef.current.rotation.z += delta * 0.25
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={2.2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh castShadow receiveShadow>
          <icosahedronGeometry args={[1.35, 2]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#140a2e"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        <mesh ref={knotRef} castShadow receiveShadow>
          <torusKnotGeometry args={[1.05, 0.16, 220, 24]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#0b2235"
            roughness={0.15}
            metalness={0.85}
          />
        </mesh>
      </Float>

      <pointLight position={[3, 3, 4]} intensity={24} color="#67e8f9" />
      <pointLight position={[-3, -2, 3]} intensity={18} color="#a78bfa" />
      <Sparkles count={220} scale={6} size={2.8} speed={0.35} opacity={0.9} color="#ffffff" />
    </group>
  )
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#05070d']} />
      <fog attach="fog" args={['#05070d', 4, 16]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 5, 4]} intensity={2.2} />
      <directionalLight position={[-4, -2, 2]} intensity={0.85} color="#a78bfa" />
      <GojoOrb />
      <Stars radius={80} depth={60} count={3000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <div className="canvas-shell">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
          <Scene />
        </Canvas>
      </div>

      <main className="hero">
        <section className="content">
          <p className="eyebrow">React • Vite • Three.js</p>
          <h1>Gojo in a Neon Dimension</h1>
          <p>
            A stylish 3D anime-inspired landing page with glowing energy, floating geometry, and a futuristic portal vibe.
          </p>

          <div className="buttons">
            <a className="primary" href="#">Enter the Domain</a>
            <a className="secondary" href="#">Watch Trailer</a>
          </div>
        </section>

        <section className="cards">
          <div className="panel">
            <span className="label">Status</span>
            <h3>Infinite Cursed Energy</h3>
            <p>Built with a responsive 3D scene and glassmorphism card layout.</p>
          </div>

          <div className="panel">
            <span className="label">Tech</span>
            <h3>React + Three Fiber</h3>
            <p>Interactive scene, particles, orbit controls, and anime-inspired styling.</p>
          </div>

          <div className="panel">
            <span className="label">Theme</span>
            <h3>Neon & Cosmic</h3>
            <p>Perfect for a landing page, portfolio, or fan art showcase.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
