import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    imageWrap: {
      display: 'flex',
      alignItems: 'center'
    },
    image: {
      width: 150,
      height: 150,
      objectFit: 'cover',
      objectPosition: 'top',
      borderRadius: '50%',
      border: '4px solid #FFFFFF'
    },
    head: {
      color: '#ccc',
      fontSize: '14px',
      borderBottom: '2px solid #ccc'
    },
    info: {
      fontSize: '18px'
    }
  }),
);


export const AboutPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.imageWrap}>
          <img className={classes.image} src="https://hhcdn.ru/photo/580440396.jpeg?t=1600805606&h=v5FmydJGy_YVeEMlVWoveQ" alt="Dmitry Voronin" title="Dmitry Voronin" />
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <p className={classes.head}>Имя:</p>
              <p className={classes.info}>Дмитрий</p>
            </Grid>
            <Grid item xs={6}>
              <p className={classes.head}>Фамилия:</p>
              <p className={classes.info}>Воронин</p>
            </Grid>
            <Grid item xs={6}>
              <p className={classes.head}>Возраст:</p>
              <p className={classes.info}>22 года</p>
            </Grid>
            <Grid item xs={6}>
              <p className={classes.head}>Образование:</p>
              <p className={classes.info}>Высшее (бакалавр)</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>Обо мне</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Мне нравится что-то постоянно изучать, от природы любопытный человек, это одна из причин, по которой я пошёл в IT сферу – всегда приходится учится новому и мне это приносит удовольствие. Любимый тип задач – когда Я даже не знаю, как это делается, но со временем, нахожу информацию, изучаю, применяю и таким образом прихожу к решению.
                </Typography>
              <Typography variant="body1" gutterBottom>
                Ещё одна причина, по которой Я пошёл в IT, программирование и системы – моя «страсть». Когда-то это было просто хобби, ещё в подростковые времена писал скрипты для серверов в GTA и это увлекало меня. Уже потом, в университетские годы Я заинтересовался «а как же работают эти самые сайты?» и так я постепенно погрузился во всё это: HTML Academy, подписки на YouTube по Frontend'y, литература, тем и интересуюсь по сей день. В какой-то момент начал зарабатывать на этом, скорее больше из интереса, чем из-за финансов, ну и «прокачать» скиллы. Дальнейший мой путь описан в опыте работы.
                </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Frontend выбрал потому, что мне нравится визуальное представление того, что Я делаю, поэтому в работе всегда продумываю мелкие детали: hover-эффекты, плавные анимации, удобный UX/UI и т.п.
                </Typography>
              <Typography variant="body1" gutterBottom>
                Сейчас также интересуюсь Python, поскольку мне интересно его применение в сфере машинного обучения и нейросетей.
                </Typography>
              <Typography variant="body1" gutterBottom>
                В коллективе могу найти общий язык с любом человеком, но в целом, интроверт.
                По жизни не люблю сидеть на месте, стремлюсь постоянно развиваться во многих аспектах, в том числе в карьере и профессионализме. Так, я переехал из небольшого провинциального города, где учился, сначала в столицу региона, а после – страны.
                </Typography>
              <Typography variant="body1" gutterBottom>
                Предпочитаю активный отдых: коньки, ролики, велосипед, часто гуляю. Интересуюсь психологией, музыкой, естественными науками. В свободное время читаю литературу (не беллетристика), слушаю подкасты, но больше предпочитаю проводить время с друзьями.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}