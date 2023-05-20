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
            fontFamily: 'Nanum Gothic'
        },
        h2:{
            fontFamily: 'Nanum Gothic'
        },
        h3:{
            fontFamily: 'Nanum Gothic'
        },h4:{
            fontFamily: 'Nanum Gothic'
        },
        h5:{
            fontFamily: 'Nanum Gothic'   
        },     
        h6:{
            fontFamily: 'Nanum Gothic'        
        },
        subtitle1:{
            fontFamily: 'Nanum Gothic'  
        },
        subtitle2:{
            fontFamily: 'Nanum Gothic'  
        },
        body1:{
            fontFamily: 'Nanum Gothic'          },
        body2:{
            fontFamily: 'Nanum Gothic'  
        },
        button:{
            fontFamily: 'Nanum Gothic'  
        },
        caption:{
            fontFamily: 'Nanum Gothic'  
        },
        overline:{
            fontFamily: 'Nanum Gothic'  
        },        
    }
})