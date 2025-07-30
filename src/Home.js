import React from "react"
import "./Home.css"
import Product from "./Product"


function Home(){
    return(
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png" alt="image" className="home__image"/>

                    <div className="home__row" style={{ height: "380px" }}>

                            <Product
                            id="1234"
                            title="Arctic Hunter Sling Bag for Men Slim Crossbody Bag "
                            price={1299}
                            rating={3.5}
                            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcThAFvUIkMyWbHhkXPpTaPIkqdlHimSUG9pTmKeLZ5woahKKQf2HHYApdOYz4EjMoZFKKaMODMIuNWsPaaLHLtVyjqLclkuImZ-bG7lsN2OffS6bQId9Ko10Q"/>
                             <Product
                            id="2345"
                            title="boAt Stone Lumos 60W Bluetooth Speaker w/ 7 LED Projection Modes"
                            price={4699}
                            rating={4}
                            image="https://m.media-amazon.com/images/G/31/img24/BAUheadphone/978x900-Speakers_home_audio._SS900_QL85_.jpg"/>
                        
                    </div>
                    <div className="home__row" style={{ height: "420px" }}>

                            <Product
                            id="3456"
                            title="IFB 6 kg 5 Star Gentle Wash, Aqua Energie, Laundry Add, In-built heater Fully Automatic Front Load"
                            price={15999}
                            rating={3.8}
                            image="https://rukminim2.flixcart.com/image/850/1000/ktuewsw0/washing-machine-new/i/3/i/neodiva-sx-ifb-original-imag73qf4ypfrf4w.jpeg?q=90&crop=false"/>
                             <Product
                            id="4567"
                            title="Google Pixel Watch 2 Smartwatch  (Obsidian Active Strap, Free Size)"
                            price={18999}
                            rating={4.8}
                            image="https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/3/0/t/-original-imagxp8twmkchwrd.jpeg?q=20&crop=false"/>
                             <Product
                            id="5678"
                            title="VILLAIN HYDRA EAU DE PARFUM FOR MEN, 100ml"
                            price={799}
                            rating={4}
                            image="https://www.villain.in/cdn/shop/products/VillainHydraListingImage_1080x1080_02.jpg?v=1716303534"/>
                        
                    </div>
                    <div className="home__row" style={{ height: "500px" }}>

                            <Product
                            id="6789"
                            title="LG MyView Smart 34” 21:9 Curved WQHD (3440x1440) with webOS "
                            price={159999}
                            rating={4.5}
                            image="https://www.lg.com/content/dam/channel/wcms/ca_en/monitors/smart-monitors/34sr60qc-w/features/myview-smart-34sr60qc-w-03-2-webos23-new-home-m.jpg"/>
                             
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home