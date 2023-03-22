import { CategoryItem } from "../components/category/CategoryItem"
export default function TradersCategories() {

    const categories = [
        {
            title: "Aerial and satellite installers",
            img: "building_safety_service.png"
        },
        {
            title: "Bathroom fitters and designers",
            img: "catering_service.png"
        },
        {
            title: "Boiler installation",
            img: "energy_service.png"
        },
        {
            title: "Builders",
            img: "country_side_service.png"
        },
        {
            title: "Burglar alarms",
            img: "driver_service.png"
        },
        {
            title: "Carpenters",
            img: "energy_service.png"
        },
        {
            title: "Carpet cleaners",
            img: "energy_service.png"
        },
        {
            title: "Window clears",
            img: "energy_service.png"
        },
        {
            title: "Commercial cleaners",
            img: "energy_service.png"
        },
        {
            title: "Central heating (installation and servicing) ",
            img: "energy_service.png"
        },
        {
            title: "Computer repairs",
            img: "energy_service.png"
        },
        {
            title: "Drain and sewer services ",
            img: "energy_service.png"
        },
        {
            title: "Carpenters",
            img: "energy_service.png"
        },
        {
            title: "Electricians",
            img: "energy_service.png"
        },
        {
            title: "Home removals",
            img: "energy_service.png"
        },
        {
            title: "Carpenters",
            img: "energy_service.png"
        },
        {
            title: "Kitchen installation",
            img: "energy_service.png"
        },
        {
            title: "Motor vehicle mechanics",
            img: "energy_service.png"
        },
        {
            title: "Painters and decorators",
            img: "energy_service.png"
        },
        {
            title: "Plasterers",
            img: "energy_service.png"
        },
        {
            title: "Plumbers ",
            img: "energy_service.png"
        },
        {
            title: "Roofers ",
            img: "energy_service.png"
        },
        {
            title: "Roof water proofing ",
            img: "energy_service.png"
        },
        {
            title: "Tyre Fitters",
            img: "energy_service.png"
        },
        {
            title: "Window fitters",
            img: "energy_service.png"
        },
        {
            title: "Carpenters",
            img: "energy_service.png"
        },
        {
            title: "Restaurant",
            img: "energy_service.png"
        },
        {
            title: "Restaurant Chiefs",
            img: "energy_service.png"
        },
        {
            title: "Restaurant Waiters",
            img: "energy_service.png"
        },
        {
            title: "Restaurant Cashers",
            img: "energy_service.png"
        },
        {
            title: "Cooks, Private Household",
            img: "energy_service.png"
        },
        {
            title: "Restaurant Cooks",
            img: "energy_service.png"
        },
        {
            title: "Restaurant Cooks, Short Order",
            img: "energy_service.png"
        },
        {
            title: "Commercial/delivery driver",
            img: "energy_service.png"
        },
        {
            title: "Taxi driver",
            img: "energy_service.png"
        },
        {
            title: "Taxi service",
            img: "energy_service.png"
        },
        {
            title: "Private drivers",
            img: "energy_service.png"
        },
        {
            title: "Coach/Bus drivers",
            img: "energy_service.png"
        },
        {
            title: "Truck drivers",
            img: "energy_service.png"
        },
        {
            title: "Ambulance drivers",
            img: "energy_service.png"
        },
        {
            title: "Maid",
            img: "energy_service.png"
        },
        {
            title: "Baby sitters/Nanny",
            img: "energy_service.png"
        },
        {
            title: "Cleaner",
            img: "energy_service.png"
        },
        {
            title: "Security guards",
            img: "energy_service.png"
        },
        {
            title: "Bouncers",
            img: "energy_service.png"
        },
        {
            title: "Barbers",
            img: "energy_service.png"
        },
        {
            title: "Beauty technicians",
            img: "energy_service.png"
        },
        {
            title: "Hair dressers",
            img: "energy_service.png"
        },
        {
            title: "Nail technicians",
            img: "energy_service.png"
        },
        {
            title: "Warehouse operators",
            img: "energy_service.png"
        },
        {
            title: "Warehouse manager",
            img: "energy_service.png"
        },
    ]
    return (
        <>
            <div style={{ height: "13vh", background: " #2f3831" }}>

            </div>
            <section class="banner-area  margin-top-30 category-area ">
                <div class="container container-two">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>Traders Services</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                    {
                        categories.map((value, index) => (
                            <CategoryItem title={value.title} img={value.img} />
                        ))
                    }
                    </div>
                </div >
            </section >
        </>
    )
}