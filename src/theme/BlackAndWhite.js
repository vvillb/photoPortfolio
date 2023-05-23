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
            fontFamily: 'Cardo'
        },h4:{
            fontFamily: 'Playfair Display'
        },
        h5:{
            fontFamily: 'Cardo'   
        },     
        h6:{
            fontFamily: 'Cardo'        
        },
        subtitle1:{
            fontFamily: 'Cardo'  
        },
        subtitle2:{
            fontFamily: 'Cardo'  
        },
        body1:{
            fontFamily: 'Cardo'          },
        body2:{
            fontFamily: 'Cardo'  
        },
        button:{
            fontFamily: 'Cardo'  
        },
        caption:{
            fontFamily: 'Cardo'  
        },
        overline:{
            fontFamily: 'Cardo'  
        },        
       
    }
})