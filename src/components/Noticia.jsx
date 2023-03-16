import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Noticia = ({noticia}) => {
  // console.log(noticia);

  const { urlToImage, url, title, description, source } = noticia;
  return (
    <Grid item md={6} lg={4}>
      <Card>
        <CardMedia 
          component={'img'}
          alt={`Imagen de la noticia ${title}`}
          image={urlToImage || '/default-news.jpg'}
          height={'250px'}
          />

          <CardContent>
            <Typography variant='body1' color={'error'}>
              {source.name}
            </Typography>

            <Typography variant='h5' component={'div'}>
              {title}
            </Typography>

            <Typography variant='body2' component={'div'}>
              {description}
            </Typography>

            <CardActions>
              <Link
                href={url}
                target='_blank'
                variant='button'
                width={'100%'}
                textAlign={'center'}
                sx={{textDecoration: 'none'}}
                >Leer noticia
              </Link>
            </CardActions>

          </CardContent>
      </Card>
    </Grid>
  )
}

export default Noticia