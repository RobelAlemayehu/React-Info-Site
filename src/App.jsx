import React from "react"
import Navbar from "./components/navBar.jsx"
import Main from "./components/main.jsx"

export default function App() {

    const [darkMode, setDarkMode] = React.useState(true)
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }


    return (
        <div className="container">
            <Navbar 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
            />
            <Main darkMode={darkMode} />
        </div>
    )
}