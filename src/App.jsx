import { RouterProvider } from 'react-router-dom';
import { router } from "./Router/Routers/Routers";
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className="w-11/12 mx-auto bg-gradient-to-r from-pink-500 via-fuchsia-700 to-fuchsia-700  ">
      <Toaster />
      {/* <HomePages></HomePages> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
