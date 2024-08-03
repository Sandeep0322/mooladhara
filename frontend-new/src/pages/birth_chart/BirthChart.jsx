import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import HeaderBox from '../login/HeaderBox'
import { flexStyles } from '../../resources/typography/flexStyles'
import { themeColors } from '../../resources/typography/colors'
import { localeKeys } from '../../resources/typography/localeKeys'
import DownloadIcon from '@mui/icons-material/Download'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import astroIcon from '../../resources/svg/astroIcon.svg'
import scorpio from '../../resources/svg/scorpio.svg'
import sun from '../../resources/svg/sun.svg'
import kundli from '../../resources/svg/kundli.svg'
import CustomIcon from '../../custom_components/CustomIcon'
import { useNavigate } from 'react-router-dom'

const BirthChart = () => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const navigate = useNavigate()

  const leftSectionContent = {
    title: 'Scorpio (Vrishchik)',
    dateTime: 'Thu Jun 15 2000, 12:30:00 PM',
    sunSign: 'Cancer (karkat)',
    image: kundli, // Replace with the actual path to your sample image
  }

  const rightSectionContent = [
    {
      title: 'Ascendant in Virgo (Kanya)',
      description:
        'With your Ascendant in the Vedic sign of Virgo, you appear to be analytical, detail-oriented, and practical. Your approach to life is methodical and organized, and you strive for perfection in everything you do. On the flip side, you may come across as overly critical or overly focused on minor details. In this journey through life, you are learning to balance your practicality with flexibility and spontaneity.',
      icon: astroIcon,
    },
    {
      title: 'Sun in Gemini (Mithun)',
      description:
        'As per Vedic astrology, your Sun is settled in Gemini. It powers you to be adaptable, curious, and communicative. You may feel like your true self when engaging in diverse activities and connecting with a variety of people. The Sun is also in the 10th House of your chart. It suggests that you may seek recognition and success through your versatile and communicative abilities. This placement also indicates a strong potential for leadership and authority in your career.',
      icon: astroIcon,
    },
    {
      title: 'Venus in Gemini (Mithun)',
      description:
        'Born with Venus in Gemini, your romantic side is charming, adaptable, and intellectually stimulated. You may value variety, communication, and mental connections in your relationships. However, this placement can also indicate a tendency to be indecisive or superficial in matters of the heart.',
      icon: astroIcon,
    },
    {
      title: 'Moon in Scorpio (Vrishchik)',
      description:
        'In your Vedic chart, the Moon resides in Scorpio. Your emotional inner-self is influenced by intensity, depth, and a strong desire for transformation. This placement suggests that you may react with emotional intensity and secrecy at times. It also indicates a strong need for privacy and a tendency to keep your emotions hidden. The Moon is also in the 3rd House of your chart. It implies that your communication style may be influenced by emotional depth and a desire for meaningful connections. You may also have a strong intuition and a need for intellectual stimulation in your immediate environment.',
      icon: astroIcon,
    },
    {
      title: 'Mercury in Gemini (Mithun)',
      description:
        'As per Vedic astrology, your Mercury is placed in Gemini. It stimulates your intellect to be versatile, analytical, and communicative. This placement enhances your ability to adapt to various situations and express yourself effectively. Mercury is also in the 10th House of your chart. It represents a strong focus on career, communication, and public image. This placement suggests that your mind is capable of strategic thinking and effective decision-making in professional matters.',
      icon: astroIcon,
    },
    {
      title: 'Mars in Gemini (Mithun)',
      description:
        'In your Vedic chart, Mars is in Gemini. It drives you to pursue your goals with intellectual vigor, versatility, and a desire for constant stimulation. This placement suggests that you may be highly motivated by mental challenges and the need to constantly learn and adapt.',
      icon: astroIcon,
    },
  ]

  return (
    <HeaderBox>
      <Box
        sx={{
          ...flexStyles.flexColumn,
          alignItems: 'center',
          textAlign: 'center',
          mt: '20px',
        }}
      >
        <Typography
          variant={mobile ? 'body8' : 'h3'}
          sx={{ color: themeColors.palette.customColor.main }}
        >
          Jhon, Here's your birth chart
        </Typography>
      </Box>
      <Box
        sx={{
          ...flexStyles.flexRowSpaceBetween,
          flexDirection: mobile ? 'column' : 'row',
          mt: '20px',
          flexGrow: 1,
          width: '100%',
          overflow: mobile ? '' : 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: '15px',
            border: '1px solid white',
            width: mobile ? '100%' : '39%',
            borderRadius: '17px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '17px',
              backgroundColor: '#111111',
              p: '30px',
              ...flexStyles.flexColumnCenter,
              overflowY: 'auto',
              // Hide scrollbar for Chrome, Safari and Opera
              '&::-webkit-scrollbar': {
                width: '0px',
                height: '0px',
              },
              // Hide scrollbar for IE, Edge
              '-ms-overflow-style': 'none',
              // Hide scrollbar for Firefox
              'scrollbar-width': 'none',
            }}
          >
            <Box sx={{ width: '100%', ...flexStyles.flexColumnCenter }}>
              <CustomIcon src={scorpio} width={48} height={48} />{' '}
              <Typography
                variant={'body9'}
                sx={{
                  color: themeColors.palette.customColor.white,
                  mt: '12px',
                }}
              >
                {leftSectionContent.title}
              </Typography>
              <Typography
                variant={'body5'}
                sx={{
                  color: themeColors.palette.customColor.grey4,
                  mt: '12px',
                }}
              >
                {leftSectionContent.dateTime}
              </Typography>
              <Box
                sx={{
                  mt: '12px',
                  borderRadius: '23px',
                  border: '1px solid',
                  borderColor: themeColors.palette.customColor.grey5,
                  ...flexStyles.flexRowCenterSpaceEvenly,
                  p: '4px 8px',
                  gap: '5px',
                }}
              >
                <CustomIcon src={sun} width={20} height={20} />{' '}
                <Typography
                  variant={'body5'}
                  sx={{
                    color: themeColors.palette.customColor.white,
                  }}
                >
                  Sun Sign
                </Typography>
                <Typography
                  variant={'body5'}
                  sx={{
                    color: themeColors.palette.customColor.grey4,
                  }}
                >
                  {leftSectionContent.sunSign}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                mt: '50px',
                width: '80%',
                height: '80%',
              }}
            >
              {/* <CustomIcon src={kundli} width={'100px'} height={'100px'} /> */}
              <img
                src={leftSectionContent.image}
                width='100%'
                height='100%'
                alt='kundli'
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            p: '15px',
            width: mobile ? '100%' : '59%',
            height: '100%',
            border: '1px solid white',
            borderRadius: '17px',
            mt: mobile ? '24px' : '',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '17px',
              ...(mobile
                ? flexStyles.flexColumn
                : flexStyles.flexRowSpaceBetween),
              flexWrap: 'wrap',
              overflowY: 'scroll',
              backgroundColor: '#111111',
              p: '25px',
              // Hide scrollbar for Chrome, Safari and Opera
              '&::-webkit-scrollbar': {
                width: '0px',
                height: '0px',
              },
              // Hide scrollbar for IE, Edge
              '-ms-overflow-style': 'none',
              // Hide scrollbar for Firefox
              'scrollbar-width': 'none',
            }}
          >
            {rightSectionContent.map((section, index) => (
              <Box
                key={index}
                sx={{
                  width: mobile ? '100%' : '48%',
                  mb: '20px',
                  border: '1px solid',
                  borderColor: themeColors.palette.customColor.grey5,
                  borderRadius: '10px',
                  p: '15px',
                  ...flexStyles.flexColumnAlignStart,
                }}
              >
                <Box sx={{ ...flexStyles.flexAlignCenter, mb: '12px' }}>
                  <CustomIcon
                    src={astroIcon}
                    width={mobile ? 18 : 24}
                    height={mobile ? 18 : 24}
                  />
                  <Typography
                    variant={'body11'}
                    sx={{
                      color: themeColors.palette.customColor.white,
                      ml: '8px',
                    }}
                  >
                    {section.title}
                  </Typography>
                </Box>
                <Typography
                  variant={'body5'}
                  sx={{
                    color: themeColors.palette.customColor.grey6,
                    textAlign: 'left',
                  }}
                >
                  {section.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          ...flexStyles.flexRowFlexEnd,
          width: '100%',
          mt: '50px',
          gap: '33px',
        }}
      >
        <Button
          variant='contained'
          sx={{
            backgroundColor: themeColors.palette.customColor.grey3,
            color: 'white',
            '&:hover': {
              backgroundColor: themeColors.palette.customColor.grey3,
            },
            '& .MuiButton-endIcon': {
              color: 'white',
            },
            height: '44px',
            minWidth: '164px',
            borderRadius: '41px',
            textTransform: 'none',
            fontSize: mobile ? '12px' : '15px',
          }}
          startIcon={
            <DownloadIcon
              sx={{
                width: mobile ? '18px' : '24px',
                height: mobile ? '18px' : '24px',
              }}
            />
          }
          //   onClick={() => navigate('/verify')}
        >
          {localeKeys.download}
        </Button>
        <Button
          variant='contained'
          sx={{
            backgroundColor: themeColors.palette.customColor.main,
            color: 'white',
            '&:hover': {
              backgroundColor: themeColors.palette.customColor.main,
            },
            '& .MuiButton-endIcon': {
              color: 'white',
            },
            height: '44px',
            minWidth: '164px',
            borderRadius: '41px',
            textTransform: 'none',
            fontSize: mobile ? '12px' : '15px',
          }}
          endIcon={
            <ArrowForwardIcon
              sx={{
                width: mobile ? '18px' : '24px',
                height: mobile ? '18px' : '24px',
              }}
            />
          }
          onClick={() => navigate('/chat')}
        >
          {localeKeys.letsGetStarted}
        </Button>
      </Box>
    </HeaderBox>
  )
}

export default BirthChart
