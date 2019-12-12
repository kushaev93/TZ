import React, { useEffect } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { Fetching } from '../actions/actionCreators';

//MUI
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    loader: {
        position: 'absolute',
        top: '50%',
        left: '50%'
    },
    textLeft : {
        textAlign: 'left',
    }
  }));


const CardList = (props) => {
    const classes = useStyles()
    const {
        loading,
        fetching,
        errors,
        rows,
        total
     } = props;

     useEffect(() => {
          fetching()
     },[])

    const cards = rows.map(row => {
        return <Card key={row.id} row={row}/>
     })

    return (
       loading ?
        (<div className={classes.loader}><CircularProgress /></div>) :
         (  <>
            <p className={classes.textLeft}>Нашлось {total} анкет</p>
            <div>
                {cards}
            </div>
            </>
         )
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetching : () => dispatch(Fetching())
    }
}

const mapStateToProps = state => {
    return{
        loading: state.isLoading,
        errors : state.errors,
        rows : state.rows,
        total : state.total
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CardList);
