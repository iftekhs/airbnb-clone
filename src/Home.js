import React from 'react'
import Banner from './Banner.js'
import './Home.css'
import Card from './Card.js'

function Home() {
    return (
        <div className="home">
          <Banner/>

<div  className="home__section">
<Card 
description="Unique acivities we can do togather, led by many hosts"
title="Online Experiences"
src="https://therovingfoleys.com/wp-content/uploads/2020/01/Camping-at-night.jpg"/>

<Card 
description="We are currently selling some entire home with a big discount!"
title="Entire homes"
src="https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg"/>

<Card 
description="We are offering a new package of night camp"
title="Unique Stays"
src="https://assets0.biggerpockets.com/uploads/wordpress_blog_post/image/3836/featured_pretty-home.jpg"/>

<Card 
description="We are offering a new package of night camp"
title="Unique Stays"
src="https://assets0.biggerpockets.com/uploads/wordpress_blog_post/image/3836/featured_pretty-home.jpg"/>

</div>

<div  className="home__section">
<Card src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"
title="Pen house in London"
description="This room in London near a park."
price="$369.50/night"/>
<Card src="https://www.africaglobalvillage.com/wp-content/uploads/2019/08/ethiopia-ghana-have-highest-hotel-room-rates-in-africa.jpg"
title="Double Bed"
description="This is in some hotel in Us in a residential area"
price="$120/night"/>
<Card src="https://cdn.galaxy.tf/unit-media/tc-default/uploads/images/offer_photo/001/589/792/ehhv-room-1-standard.jpg"
title="Self Room"
description="This Room is best for any single person to stay located in London"
price="$580.10/night"/>
</div>


        </div>
    )
}

export default Home
