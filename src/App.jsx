import { RouterProvider } from 'react-router-dom';
import { router } from "./Router/Routers/Routers";
import { Toaster } from 'react-hot-toast';
import ScrollToTop from "react-scroll-to-top";
function App() {

  return (
    <div className="w-11/12 mx-auto bg-gradient-to-r from-pink-500 via-fuchsia-700 to-fuchsia-700  ">
      <Toaster />
      <ScrollToTop smooth className='me-6' />
      {/* <HomePages></HomePages> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
