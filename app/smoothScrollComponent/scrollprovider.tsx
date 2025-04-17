"use client"
import React ,{useRef,useEffect,useLayoutEffect,useContext,useMemo,createContext,useState} from 'react'
import Lenis from '@studio-freight/lenis';

const PageContext = createContext<{ lenis: Lenis | null }>({
  lenis: null,
})




interface PageContextsProps {
  children: React.ReactNode;
}

export const PageProvider = ({ children  }: PageContextsProps) => {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const lenisRef = useRef<number | null>(null)
  useLayoutEffect(()=>{
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://easings.net
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      smoothTouch : false,
      touchMultiplier: 2,
      
    })
    setLenis(lenis)
    return()=>{
      lenis.destroy()
      setLenis(null)

    }
  },[])
   useEffect(()=>{
      const animate = (time: number) => {
        lenis?.raf(time)
        lenisRef.current = requestAnimationFrame(animate)
      }
      lenisRef.current = requestAnimationFrame(animate)
      return () => {
        if (lenisRef.current) {
          cancelAnimationFrame(lenisRef.current)
        }
      }
   },[lenis])
   const memovalue = useMemo(() => ({ lenis }), [lenis])  

  return (
    <PageContext.Provider value={memovalue}>
      {children}
    </PageContext.Provider>
  )
}

export default function usepage(){
  return useContext(PageContext)
}