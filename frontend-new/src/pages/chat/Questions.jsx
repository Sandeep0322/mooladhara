import React from 'react'
import { Box, Grid, Typography, Paper, IconButton } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import crown from '../../resources/svg/crown.svg'
import { flexStyles } from '../../resources/typography/flexStyles'
import CustomIcon from '../../custom_components/CustomIcon'

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#1e1e1e',
    borderRadius: '18px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative', // Added to position the icon
  },
  iconButton: {
    alignSelf: 'flex-end',
    color: '#ff1493',
  },
  topRightIcon: {
    position: 'absolute',
    top: '-8px', // Adjust as needed to push the icon to the top edge
    right: '-8px', // Adjust as needed to push the icon to the right edge
    color: '#ff1493',
  },
  chip: {
    backgroundColor: '#444',
    color: '#fff',
    borderRadius: '20px',
    padding: '5px 10px',
    marginTop: '10px',
    textAlign: 'left',
  },
}

const items = [
  { text: 'What are my strengths and weaknesses?', category: 'Personality' },
  { text: 'What type of job suit me the best?', category: 'Career' },
  { text: 'Tell me about my relationship', category: 'Love' },
  { text: 'What do I value most in love and relationship?', category: 'Love' },
  { text: 'How is my current time going?', category: 'Current' },
  { text: 'Tell me about my personality', category: 'Personality' },
  { text: 'What are my strengths and weaknesses?', category: 'Personality' },
  { text: 'What are my strengths and weaknesses?', category: 'Personality' },
]

const Questions = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant='h5' sx={{ textAlign: 'left' }}>
        Hello John,
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{ textAlign: 'left', mb: '5px', color: '#6D6D6D' }}
      >
        Here are some questions you can ask to get started.
      </Typography>
      <Grid container spacing={2} sx={styles.gridContainer}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Paper sx={styles.paper}>
              <Box sx={styles.topRightIcon}>
                <CustomIcon src={crown} width={20} height={20} />{' '}
              </Box>
              <Box sx={{ ...flexStyles.flexAlignCenter }}>
                <IconButton sx={styles.iconButton}>
                  <ChatBubbleOutlineIcon />
                </IconButton>
                <Typography
                  variant='body1'
                  sx={{ textAlign: 'left', ml: '13px' }}
                >
                  {item.text}
                </Typography>
              </Box>
              <Box sx={styles.chip}>
                <Typography variant='caption'>{item.category}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Questions
