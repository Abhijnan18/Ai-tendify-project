import Page from "@/App/page"
import { ThemeProvider } from "@/components/theme-provider"

import './App.css'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Page />
      </ThemeProvider >
    </>
  )
}

export default App
