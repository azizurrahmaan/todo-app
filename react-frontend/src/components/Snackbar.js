import { useDispatch, useSelector } from "react-redux";
import {Snackbar as MaterialSnackbar} from "@material-ui/core";
import { hideSnackbar } from "../redux/actions/snackbarActions";

import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function Snackbar() {
  const dispatch = useDispatch();

  const { message, severity, open, autoHideDuration } = useSelector(state => state.snackbar);

  function handleClose() {
    dispatch(hideSnackbar());
  }

  return (
    <MaterialSnackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
            {message}
        </Alert>
    </MaterialSnackbar>
  );
}