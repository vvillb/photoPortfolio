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
            fontFamily: "'Playfair Display','Pacifico','Abril Fatface'"
        },
        h2:{
            fontFamily:  "'Playfair Display','Pacifico','Abril Fatface'"
        },
        h3:{
            fontFamily: "'Cardo','Fira Sans','Cormorant Garamond'"
        },h4:{
            fontFamily:  "'Playfair Display','Pacifico','Abril Fatface'"
        },
        h5:{
            fontFamily: "'Cardo','Fira Sans','Cormorant Garamond'"  
        },     
        h6:{
            fontFamily: "'Cardo','Fira Sans','Cormorant Garamond'"       
        },
        subtitle1:{
            fontFamily: "'Cardo','Fira Sans','Cormorant Garamond'" 
        },
        subtitle2:{
            fontFamily: "'Cardo','Fira Sans','Cormorant Garamond'" 
        },
        body1:{
            fontFamily: "'Cardo','Fira Sans','Cormorant Garamond'"         },
        body2:{
            fontFamily: "'Cardo','Fira Sans','Cormorant Garamond'" 
        },
        button:{
            fontFamily: "'Cardo','Fira Sans','Cormorant Garamond'" 
        },
        caption:{
            fontFamily: "'Cardo','Fira Sans','Cormorant Garamond'" 
        },
        overline:{
            fontFamily: "'Cardo','Fira Sans','Cormorant Garamond'" 
        },        
       
    }
})