import {ThemeProvider} from '@emotion/react';
import {CssBaseline} from '@mui/material';
import { NeutralTheme } from './NeutralTheme';
import { BlackAndWhite } from './BlackAndWhite';

const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={BlackAndWhite}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}

export default AppTheme
