import React,{useState,useEffect} from 'react'
import "./BillSplit.css"
import { Button,Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const Splitter=()=>{
    const [pay,setpay]=useState(1);
    const [split,setsplit]=useState(1);
    const paynowdetails=()=>{
        setpay({
            pay:0
        });
        
    }
    const splitnow=()=>{
        setsplit({
            split:0
        });
        
    }
    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(5),
        },
        
        extendedIcon: {
          marginRight: theme.spacing(1),
        },
      }));

      const classes = useStyles();
    return (
        <>

            
            {pay===1?(<Button size="large" color="primary" onClick={paynowdetails} className={classes.margin}>Pay</Button>):
            (
                <Card>
                    Hello
                </Card>
            )
            }
           <br/>
           {split===1?(

           <Button size="large" color="secondary" onClick={splitnow} className={classes.margin}>Split</Button>

           ):
           (
               <Card style={{height:"200px"}}>
                   Hy
               </Card>
           )
           }

            
        </>
    )
}
export default Splitter;
