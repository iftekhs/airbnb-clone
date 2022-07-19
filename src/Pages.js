import { Button } from '@material-ui/core'
import React from 'react'
import "./Pages.css"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


function Pages() {
    return (
        <div className="pages">
     <div className="pages__items">    
<Button className="arrow">
  <ChevronLeftIcon />
</Button>


<p> 1 </p>


<p>2</p>


<Button className="arrow">
 <ChevronRightIcon/>
</Button>

</div>   

        </div>
    )
}



export default Pages
