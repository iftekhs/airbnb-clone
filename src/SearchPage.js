import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult.js'


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
            <p>62 stays 26 august to 30 august 2 guest</p>
            <h1> stays nearby </h1>
<Button variant="outlined"> Cancellation Flexibility </Button>
<Button variant="outlined"> Type of Place </Button>
<Button variant="outlined"> price </Button>
<Button variant="outlined"> Rooms and beds </Button>
<Button variant="outlined"> More filters </Button>

            </div>

<SearchResult 
img="https://media.istockphoto.com/photos/hotel-room-suite-with-view-picture-id627892060?k=6&m=627892060&s=612x612&w=0&h=lVIi3QTDsZ1UDnMAjuy8ob9Zm6sBPCZ84x_e_OUl7Wk="
location=" Private room in center of London"
title="Stay at This spacious Edwardian House!"
description="1 guest 1 bedroom  1.5 shared bathrooms Wifi Kitchen Free parking   Washing Machine"
    star={4.73}
    price="$50 / night"
    total=" $250 / night "
/>

<SearchResult 
img="https://i.pinimg.com/originals/e1/81/ef/e181ef00efbc49e6cfb4e5a9168223d4.jpg"
location=" Private room in center of London"
title="Stay at This spacious Edwardian House!"
description="1 guest 1 bedroom  1.5 shared bathrooms Wifi Kitchen Free parking   Washing Machine"
    star={4.73}
    price="$50 / night"
    total=" $250 / night "
/>

<SearchResult 
img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUSFp57om56I4CP3vhHxa6BaB7ZASw61i14Q&usqp=CAU"
location=" Private room in center of London"
title="Stay at This spacious Edwardian House!"
description="1 guest 1 bedroom  1.5 shared bathrooms Wifi Kitchen Free parking   Washing Machine"
    star={4.73}
    price="$50 / night"
    total=" $250 / night "
/>


<SearchResult 
img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWI9LZTSYfecIoFSoPEgaPhJROBF5zinQAEQ&usqp=CAU"
location=" Private room in center of London"
title="Stay at This spacious Edwardian House!"
description="1 guest 1 bedroom  1.5 shared bathrooms Wifi Kitchen Free parking   Washing Machine"
    star={4.73}
    price="$50 / night"
    total=" $250 / night "
/>


<SearchResult 
img="https://i.pinimg.com/originals/26/b9/e8/26b9e824666bb433811e46f5a6ae8c04.jpg"
location=" Private room in center of London"
title="Stay at This spacious Edwardian House!"
description="1 guest 1 bedroom  1.5 shared bathrooms Wifi Kitchen Free parking   Washing Machine"
    star={4.73}
    price="$50 / night"
    total=" $250 / night "
/>

        </div>
    )
}

export default SearchPage
