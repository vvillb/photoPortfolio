import { createTheme } from "@mui/material";

export const BlackAndWhite=createTheme({
    palette:{
        primary:{
            main:'#acacac',
            darker:'#7e7e7e'
        },
       dark:{
            main:'#040404',
            gray:'#4f4f4f'
       },        
        background:{
            main:'#e4e4e4'
        }
    },
        typography:{
        h1:{
            fontFamily: 'Playfair Display'
        },
        h2:{
            fontFamily: 'Playfair Display'
        },
        h3:{
            fontFamily: 'Source Sans Pro'
        },h4:{
            fontFamily: 'Source Sans Pro'
        },
        h5:{
            fontFamily: 'Source Sans Pro'   
        },     
        h6:{
            fontFamily: 'Source Sans Pro'        
        },
        subtitle1:{
            fontFamily: 'Source Sans Pro'  
        },
        subtitle2:{
            fontFamily: 'Source Sans Pro'  
        },
        body1:{
            fontFamily: 'Cardo'          },
        body2:{
            fontFamily: 'Source Sans Pro'  
        },
        button:{
            fontFamily: 'Source Sans Pro'  
        },
        caption:{
            fontFamily: 'Source Sans Pro'  
        },
        overline:{
            fontFamily: 'Source Sans Pro'  
        },        
       
    }
})