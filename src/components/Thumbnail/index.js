import React from "react";

import {Image} from "./Thumbnail.styles";

const Thumbnail = ({image, movieId, clickable}) => {

    return(
    <div>
        <Image movieTitle={movieId} src={image} alt='movie-thumb'/>
    </div>

    )
}
export default Thumbnail;
