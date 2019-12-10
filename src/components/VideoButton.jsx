import React from 'react';

//MUI
import { makeStyles } from "@material-ui/core/styles";
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles(theme => ({

    bg1:{
        borderRadius: '50%',
        background: '#ebeff8',
        width:' 88px',
        height:' 88px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
 
    },
    bg2:{
        borderRadius: '50%',
        background: '#d7dff0',
        width: '62px',
        height: '62px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg3:{
        borderRadius: '50%',
        background: '#8ba2d4',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    triangle:{
        width: '0',
        height: '0',
        borderTop:' 8px solid transparent',
        borderBottom: '8px solid transparent',
        borderLeft: '12px solid #fff'
    }


}));

const VideoButton = () => {

    const classes = useStyles();
    return (
        <div>
            <div className={classes.bg1}>
                <div className={classes.bg2}>
                    <div className={classes.bg3}>
                        <div className={classes.triangle}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoButton;
