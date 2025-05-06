import Home from './screens/home';
import Resume from './screens/resume';
import Projects from './screens/project';
import Contact from './screens/contact';
import Display from './screens/display'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/display" element={<Display/>}/>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;




