import React from 'react'
// import ani from '../mainani/ani'
import Headani from './ani';
import Script from 'next/script';
function Anihead() {
    return (
        <div>

            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <link rel="stylesheet" type="text/css" href="ani.css" />
                 <Script src="https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.min.js"/>
                 <Script src="https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.min.js"/>
                 <Script src="https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.min.js"/>
            </head>
            <body>
                <div id="canvas_container">hello</div>     
            </body>
        </div>
    )
}

export default Anihead;