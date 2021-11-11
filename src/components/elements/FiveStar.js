import React from 'react';
import Image from "../elements/Image";

const FiveStars = () => {

  return (
    <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
        <Image
            src={require("./../../assets/images/star.png")}
            alt="Features split 01"
            width={30}
            height={30}
        />
        <Image
            src={require("./../../assets/images/star.png")}
            alt="Features split 01"
            width={30}
            height={30}
        />
        <Image
            src={require("./../../assets/images/star.png")}
            alt="Features split 01"
            width={30}
            height={30}
        />
        <Image
            src={require("./../../assets/images/star.png")}
            alt="Features split 01"
            width={30}
            height={30}
        />
        <Image
            src={require("./../../assets/images/star.png")}
            alt="Features split 01"
            width={30}
            height={30}
        />
    </div>
  );
}

export default FiveStars;