import React from 'react';
import Navbar from '../appbar'
import CssBaseline  from '@material-ui/core/CssBaseline'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './styles.css'

const Page = (props) => {

    const {results, goTo} = props

    const isEmpty = results.length === 0


    
    return (
        <React.Fragment>
            <CssBaseline />
            
            <Navbar />

            <div className="results-page">
                {
                isEmpty 
                ?
                <Typography>
                    There are no results
                </Typography> 
                : 
                results.map(item => (
                    <div className='card-container' key={item.id}>
                         <Card
                                className="card"
                                onClick={() => goTo(`/details/${item.id}`)}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        className="card-media"
                                        image={item.image}
                                        title={item.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.content}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                    </div>

                ))
                }
            </div>
        </React.Fragment>
    );
};

export default Page;