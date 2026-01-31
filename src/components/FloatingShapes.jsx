import React from 'react'

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-purple-400/20 rounded-lg rotate-45 animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border-4 border-pink-400/20 rounded-full animate-float animation-delay-2000"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 border-4 border-blue-400/20 rounded-lg rotate-12 animate-float animation-delay-4000"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 border-4 border-cyan-400/20 rounded-full animate-float animation-delay-6000"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 border-4 border-yellow-400/20 rounded-lg rotate-45 animate-float animation-delay-200"></div>
      <div className="absolute top-1/3 right-1/3 w-36 h-36 border-4 border-indigo-400/20 rounded-full animate-float animation-delay-6000"></div>
    </div>
  )
}

export default FloatingShapes
