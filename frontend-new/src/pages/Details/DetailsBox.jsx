import { Box, Button, Modal, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { localeKeys } from "../../resources/typography/localeKeys";
import { themeColors } from "../../resources/typography/colors";
import { flexStyles } from "../../resources/typography/flexStyles";
import CustomIcon from "../../custom_components/CustomIcon";
import {
  LocalizationProvider,
  MobileTimePicker,
  DateCalendar,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SearchFieldWithPopover from "./SearchFieldWithPopover";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import dayjs from "dayjs";
import calendar from "../../resources/svg/calendar.svg";
import clock from "../../resources/svg/clock.svg";
import { useNavigate } from "react-router-dom";

const genders = [
  { id: "male", label: "Male" },
  { id: "female", label: "Female" },
  { id: "other", label: "Other" },
];

const DetailsBox = ({ name }) => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [showMobileTimePicker, setShowMobileTimePicker] = React.useState(false);
  const [selectedPlace, setSelectedPlace] = useState("");
  const places = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href);
    const authToken = urlParams.get("authToken");
    localStorage.setItem("authToken", authToken);
    navigate("/update-details");
  });

  console.log(isDatePickerOpen, "asldkfjjladfj");

  const toggleMobileTimePicker = () => {
    setShowMobileTimePicker(!showMobileTimePicker);
  };

  const handleMobileTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDatePickerOpen(false);
  };

  const handleGenderClick = (genderId) => {
    setSelectedGender(genderId);
  };

  return (
    <Box>
      <Box sx={{ pb: "50px", pt: mobile ? "40px" : "" }}>
        <Typography
          variant={mobile ? "body7" : "h3"}
          sx={{ color: themeColors.palette.customColor.main, pt: "40px" }}
        >{`${name}, ${localeKeys.knowAboutYourLove}`}</Typography>
        <Typography
          variant={mobile ? "body7" : "h3"}
          sx={{ color: themeColors.palette.customColor.main }}
        >
          {localeKeys.healthCareer}
        </Typography>
      </Box>
      <Box
        sx={{
          flexWrap: "wrap",
          display: "flex",
          ...(mobile ? flexStyles.flexColumn : flexStyles.flexRowSpaceBetween),
        }}
      >
        {/* ---------- Gender ---------- */}
        <Box
          sx={{
            width: mobile ? "100%" : "47%",
            border: "1px solid",
            borderColor: themeColors.palette.customColor.grey2,
            borderRadius: "10px",
            p: mobile ? "16px" : "40px",
            ...flexStyles.flexColumnAlignStart,
            backgroundColor: themeColors.palette.customColor.lightGrey,
            height: mobile ? "" : "205px",
          }}
        >
          <Typography
            variant={mobile ? "body8" : "body6"}
            sx={{ color: themeColors.palette.customColor.white }}
          >
            {localeKeys.selectYourGender}
          </Typography>
          <Box display="flex">
            {genders.map((gender) => (
              <Box
                key={gender.id}
                onClick={() => handleGenderClick(gender.id)}
                sx={{
                  height: "44px",
                  borderRadius: "32px",
                  backgroundColor:
                    selectedGender === gender.id
                      ? themeColors.palette.customColor.main
                      : themeColors.palette.customColor.grey,
                  marginRight: "10px",
                  ...flexStyles.flexCenter,
                  cursor: "pointer",
                  padding: "0 16px",
                  mt: mobile ? "24px" : "40px",
                }}
              >
                <Typography
                  variant={mobile ? "body5" : "body1"}
                  sx={{ color: themeColors.palette.customColor.white }}
                >
                  {gender.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        {/* ---------- DOB ---------- */}
        <Box
          sx={{
            width: mobile ? "100%" : "47%",
            border: "1px solid",
            borderColor: themeColors.palette.customColor.grey2,
            borderRadius: "10px",
            p: mobile ? "16px" : "40px",
            ...flexStyles.flexColumnAlignStart,
            backgroundColor: themeColors.palette.customColor.lightGrey,
            height: mobile ? "" : "205px",
            mt: mobile ? "24px" : "",
          }}
        >
          <Typography
            variant={mobile ? "body8" : "body6"}
            sx={{ color: themeColors.palette.customColor.white }}
          >
            {localeKeys.dateOfBirth}
            <Typography
              variant="span"
              sx={{
                fontSize: mobile ? "10px" : "15px",
                pl: "13px",
                color: themeColors.palette.customColor.grey2,
              }}
            >
              {`(${localeKeys.accurateDob})`}
            </Typography>
          </Typography>
          <Box
            sx={{
              minWidth: mobile ? "80px" : "127px",
              height: "44px",
              backgroundColor: selectedDate
                ? themeColors.palette.customColor.main
                : themeColors.palette.customColor.grey,
              borderRadius: "7px",
              p: "10px",
              ...flexStyles.flexRowSpaceBetweenAlignCenter,
              gap: "10px",
              cursor: "pointer",
              mt: mobile ? "24px" : "40px",
            }}
            onClick={() => setIsDatePickerOpen(true)}
          >
            <CustomIcon
              src={calendar}
              width={mobile ? 18 : 24}
              height={mobile ? 18 : 24}
            />
            <Typography
              sx={{
                fontSize: mobile ? "12px" : "15px",
                color: themeColors.palette.customColor.white,
              }}
            >
              {selectedDate
                ? dayjs(selectedDate).format("ddd - DD - MMM - YYYY")
                : localeKeys.selectDate}
            </Typography>
          </Box>
          <Modal
            open={isDatePickerOpen}
            onClose={() => setIsDatePickerOpen(false)}
            aria-labelledby="date-picker-modal"
            aria-describedby="date-picker-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: mobile ? "90%" : "350px",
                bgcolor: "background.paper",
                overflowY: "auto", // Make content scrollable if it exceeds max height
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  value={selectedDate}
                  onChange={handleDateChange}
                  views={["year", "month", "day"]}
                  sx={{
                    mt: "16px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
              </LocalizationProvider>
            </Box>
          </Modal>
        </Box>
        {/* ---------- Time of Birth ---------- */}
        <Box
          sx={{
            width: mobile ? "100%" : "47%",
            border: "1px solid",
            borderColor: themeColors.palette.customColor.grey2,
            borderRadius: "10px",
            mt: mobile ? "24px" : "50px",
            p: mobile ? "16px" : "40px",
            ...flexStyles.flexColumnAlignStart,
            backgroundColor: themeColors.palette.customColor.lightGrey,
            height: mobile ? "" : "205px",
          }}
        >
          <Typography
            variant={mobile ? "body8" : "body6"}
            sx={{ color: themeColors.palette.customColor.white }}
          >
            {localeKeys.timeOfBirth}
            <Typography
              variant="span"
              sx={{
                fontSize: mobile ? "10px" : "15px",
                pl: "13px",
                color: themeColors.palette.customColor.grey2,
              }}
            >
              {`(${localeKeys.accurateTime})`}
            </Typography>
          </Typography>
          <Box sx={{ mt: mobile ? "24px" : "40px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileTimePicker
                value={selectedTime}
                onChange={handleMobileTimeChange}
                open={showMobileTimePicker}
                onOpen={() => setShowMobileTimePicker(true)}
                onClose={() => setShowMobileTimePicker(false)}
                minutesStep={5} // Set minutesStep to allow selection of minutes
                sx={{
                  display: "none",
                }}
              />

              {/* Custom Box component to trigger mobile time picker */}
              <Box
                sx={{
                  minWidth: "100px",
                  height: "44px",
                  backgroundColor: selectedTime
                    ? themeColors.palette.customColor.main
                    : themeColors.palette.customColor.grey,
                  borderRadius: "7px",
                  p: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                }}
                onClick={toggleMobileTimePicker}
              >
                <CustomIcon
                  src={clock}
                  width={mobile ? 18 : 24}
                  height={mobile ? 18 : 24}
                />{" "}
                <Typography
                  sx={{
                    fontSize: mobile ? "12px" : "15px",
                    color: "#FFFFFF",
                  }}
                >
                  {selectedTime
                    ? dayjs(selectedTime).format("hh:mm A") // Format with AM/PM
                    : "Select time"}
                </Typography>
              </Box>
            </LocalizationProvider>
          </Box>
        </Box>
        {/* ---------- Birth Place ---------- */}
        <Box
          sx={{
            width: mobile ? "100%" : "47%",
            border: "1px solid",
            borderColor: themeColors.palette.customColor.grey2,
            borderRadius: "10px",
            mt: mobile ? "24px" : "50px",
            p: mobile ? "16px" : "40px",
            ...flexStyles.flexColumnAlignStart,
            backgroundColor: themeColors.palette.customColor.lightGrey,
            height: mobile ? "" : "205px",
          }}
        >
          <Typography
            variant={mobile ? "body8" : "body6"}
            sx={{ color: themeColors.palette.customColor.white }}
          >
            {localeKeys.selectYourBirthPlace}
          </Typography>
          <Box sx={{ mt: mobile ? "24px" : "40px", width: "100%" }}>
            <SearchFieldWithPopover
              setSelectedPlace={setSelectedPlace}
              places={places}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ ...flexStyles.flexRowFlexEnd }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: themeColors.palette.customColor.main,
            color: "white",
            "&:hover": {
              backgroundColor: themeColors.palette.customColor.main,
            },
            "& .MuiButton-endIcon": {
              color: "white",
            },
            height: "44px",
            minWidth: "164px",
            borderRadius: "41px",
            mt: "40px",
            textTransform: "none",
            fontSize: mobile ? "12px" : "15px",
          }}
          endIcon={
            <ArrowForwardIcon
              sx={{
                width: mobile ? "18px" : "24px",
                height: mobile ? "18px" : "24px",
              }}
            />
          }
          onClick={() => navigate("/verify")}
        >
          Save & Continue
        </Button>
      </Box>
    </Box>
  );
};

export default DetailsBox;
