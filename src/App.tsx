
import { useState, useEffect } from "react"
import { Play, Info, X } from "lucide-react"
import portada from "./assets/image/sv1.gif"
import s1 from "./assets/image/1.png"
import s2 from "./assets/image/f2.jpeg"
import s3 from "./assets/image/p2.gif"
import s4 from "./assets/image/f3.jpeg"
import s5 from "./assets/image/s4.gif"
import video from "./assets/video/videofilan.mp4"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)


  const imagenes = [
    {
      id: 1,
      src: s1,
      
    },  
    {
      id: 2,
      src: s2,
      
    },
    {
      id: 3,
      src: s3,
      
    },
    { 
      id: 4,
      src: s4,
      
    },
    {
      id: 5,
      src: s5,
      
    },
  
  
  ]
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobile])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Netflix-style logo */}
      <div className="absolute top-0 left-0 p-4 z-10">
        <svg viewBox="0 0 111 30" className="h-6 w-20 sm:h-8 sm:w-24 fill-[#E50914]" focusable="false">
          <g id="netflix-logo">
            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
          </g>
        </svg>
      </div>

      {/* Main Banner */}
      <div className="relative h-[56.25vw] min-h-[400px] max-h-[80vh]">
        <img src={portada} alt="Nosotros" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">Nuestra Historia de Amor</h1>
          <p className="text-sm sm:text-base md:text-xl mb-2 sm:mb-4">
            Una producción especial para Chimi ❤
          </p>
          <div className="flex space-x-2 sm:space-x-4">
            <button
              className="bg-white text-black py-1 px-2 sm:py-2 sm:px-4 rounded flex items-center hover:bg-opacity-80 transition text-sm sm:text-base"
              onClick={() => setIsModalOpen(true)}
            >
              <Play className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Reproducir
            </button>
            <button className="bg-gray-500 bg-opacity-50 text-white py-1 px-2 sm:py-2 sm:px-4 rounded flex items-center hover:bg-opacity-40 transition text-sm sm:text-base">
              <Info className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Más información
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="p-4 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Nuestros Momentos Especiales</h2>
        <div className="grid grid-cols-3 sm:flex sm:space-x-2 gap-2 sm:gap-0 sm:overflow-x-auto pb-4">
          {imagenes.map((items ,index ) => (
            <div
              key={index}
              className="aspect-[2/3] sm:w-[200px] cursor-pointer transition transform hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={items.src}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              className="absolute -top-8 right-0 text-white z-10 hover:text-[#E50914] transition"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <video src={video} className="w-full h-full" controls autoPlay></video>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

