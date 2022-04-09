import { makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    borderRadius: '0px',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
}))
