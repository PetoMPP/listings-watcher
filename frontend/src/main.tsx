import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"
import router from "./routes.ts"
import { RouterProvider } from 'react-router'

createRoot(document.body)
  .render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
