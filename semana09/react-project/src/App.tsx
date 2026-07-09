import { useState, useRef } from 'react'

const App = () => {

  // const [cards] = useState([
  //   { icon: AnimationIcon, title: "Animation", description: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.' },
  //   { icon: DesignIcon, title: "Design", description: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.' },
  //   { icon: PhotographyIcon, title: "Photography", description: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.' },
  //   { icon: CryptoIcon, title: "Animation", description: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.' },
  //   { icon: BusinessIcon, title: "Animation", description: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.' },
  // ])

  const [contador, setContador] = useState<Array<string>>(["Manzana", "Pera"])
  const inputRef = useRef<HTMLInputElement>(null)
  // Array<string>
  // string[]

  const agregarFruta = () => {
    const frutaNueva = inputRef.current?.value

  if (!frutaNueva) return

    setContador((prev) => [...prev, frutaNueva])
    // stripe
  }

  return (
    <>
      <form>
        <input type="text" ref={inputRef} />
        <button type='button' onClick={agregarFruta}>Agregar item</button>
      </form>

      <div>
        {
          contador.map((item) => <h3>{item}</h3>)
        }
      </div>

      {/* <button onClick={() => setContador(0)}>Reiniciar</button> */}

      {/* <button onClick={() => setContador((prev) => prev + 1)}>+ 1</button> */}
      {/* Puedes agregar un botón que multiplique el número * 2? */}
      {/* <button onClick={() => setContador((prev) => prev * 2)}>* 2</button> */}

      {/* <button onClick={() => setContador((prev) => prev ** 2)}>^ 2</button> */}
    </>
  )
}

export default App