import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Global } from "@emotion/react"

import App from "./components/App.jsx"

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <Global
        styles={`
          .swiper-button-next, .swiper-button-prev {
            color: #FFFFFF;
          }

          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 28px;
          }
          .swiper-pagination-bullet-active {
            background:#818080;
          }
          .swiper-pagination-bullet {
            background: white;
          }
          .swiper-pagination {
            bottom: -50px;
          }
        `}
          />
      <App />
    </ChakraProvider>
  </StrictMode>,
)
