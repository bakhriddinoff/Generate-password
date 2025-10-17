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
    <div className={`h-[100vh] flex flex-col justify-start items-start gap-5 pt-30 pl-150 relative ${theme === "dark" ? "bg-[#1F2937]" : "bg-[#ECFDF5]"}`}>
      <button 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
      className={`w-[100px] h-[35px] absolute left-5 top-5 rounded ${theme === "dark" ? "bg-white text-black" : "text-white bg-black" }`}>{theme === "dark mode" ? "Light mode" : "Dark mode"}</button>

    <h1 className={`text-[40px] font-bold leading-10 ${theme === "dark" ? "text-white" : "text-[#111827]"}`}>Generate a <br />  <span className="text-green-400">random password</span></h1>
    <p className={` text-[20px] ${theme === "dark" ? "text-[#D5D4D8]" : "text-black"}`}>Never use an insecure password again.</p>
    <button onClick={handleGenerate} className="bg-[#10B981] h-[42px] w-[191px] rounded-[6px] text-white mt-10 mb-5 cursor-pointer hover:bg-[#11e29d]">Generate passwords</button>
    <hr  className="border-[#273549] w-[500px]"/>
    {/* btn-wrapper */}
    <div className="flex gap-5">
      <button className="bg-[#273549] h-[39px] w-[211px] rounded-[6px] text-[#10B981] mt-5">{password1}</button>
      <button className="bg-[#273549] h-[39px] w-[211px] rounded-[6px] text-[#10B981] mt-5">{password2}</button>
    </div>
    </div>

  )
}

export default App