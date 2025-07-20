import express from "express";
import {
  CreateInterviewAndGenerateQuestions,
  getUserInterviews,
  getSingleInterviews,
  getInterviewByJoinCode,
  getAllInterviews
} from "../Controllers/interview.js";

const interviewRoute = express.Router();

// Example route for creating an interview
interviewRoute.post("/create", CreateInterviewAndGenerateQuestions);
interviewRoute.get("/user/:uid", getUserInterviews);
interviewRoute.get("/single/:id", getSingleInterviews);
interviewRoute.get("/join/:joinCode", getInterviewByJoinCode);
interviewRoute.get("/all", getAllInterviews);

export default interviewRoute;
