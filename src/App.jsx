import { useState } from "react"


function App() {

  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("") 
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const generatePassword = (length = 7) =>  {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += characters.charAt(Math.floor(Math.random() * characters.length))
    }
     return pass
  }

  const handleGenerate = () => {
    setPassword1(generatePassword());
    setPassword2(generatePassword());
  }



  return (
    <div>
    </div>
  )
}

export default App