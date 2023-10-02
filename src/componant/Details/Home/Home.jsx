import { useLoaderData } from "react-router-dom";

import Banner from "../../Navbar/Banner";
import { useState } from "react";
import Donations from "../Donations";


const Home = () => {


    let filteredDonations;
    filteredDonations = useLoaderData()

    const [filterQuery, setFilterQuery] = useState("")
    if (filterQuery) {
        filteredDonations = filteredDonations?.filter((item) => item.Category === filterQuery);

    }
    return (
        <div>

            <Banner filterQuery={filterQuery} setFilterQuery={setFilterQuery}></Banner>
            <div className="mt-10">
                <Donations donations={filteredDonations}></Donations>
            </div>

        </div>
    );
};

export default Home;