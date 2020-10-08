import {useState, useEffect, useRef} from "react"

function useLogic() {
    
  const TIME_LEFT = 10
  const [text, setText] = useState("")
  const [wordCount, setWordCount] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(TIME_LEFT)
  const [timeIsRunning, setTimeIsRunning] = useState(false)
  const textareaRef = useRef(null)
  

  const handleChange = (event) => {
    const {value} = event.target
    setText(value)
  }

  const calculateWordCount = (input) => { 
    setWordCount(input.trim().split(" ").filter(item => item.length > 0).length)
  }

  const startGame = () => {
    setTimeIsRunning(true)
    setTimeRemaining(TIME_LEFT)
    setText("")
    setWordCount(0)
    textareaRef.current.disabled = false
    textareaRef.current.focus()  
  }
  
  

  useEffect(() => {
    if(timeRemaining > 0 && timeIsRunning) {
          setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
      
    } else {
      setTimeIsRunning(false)
      calculateWordCount(text)
    }
  }, [timeRemaining, timeIsRunning])

  return [textareaRef, handleChange, text, timeIsRunning, timeRemaining, startGame, wordCount]

}

export default useLogic