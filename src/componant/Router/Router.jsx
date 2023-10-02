import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Details/Home/Home";
import Donation from "../Details/Donation";
import Statistics from "../Details/Statistics";
import Donate from "../Details/Donate";

const myCreateRoute = createBrowserRouter([
    {
        path : "/",
        element : <Mainlayout></Mainlayout>,
        children : [
            {
                path : "/",
                element :<Home></Home>,
                loader : ()=> fetch('/donationdata.json')
            },
            {
                path : "/donation",
                element :<Donation></Donation>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>
            },
            {
                path : "/donations/:id",
                element : <Donate></Donate>,
                loader : ()=> fetch('/donationdata.json')
            }
          
        ]
    }
])

export default  myCreateRoute;