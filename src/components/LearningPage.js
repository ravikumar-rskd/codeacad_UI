// LearningPage.js
import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Badge,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';


const LearningPage = ({setCourses}) => {
  const navigate = useNavigate();
  // Sample data structure for steps and lectures
  const steps = [
    {
      id: 1,
      title: "1 : Learn the basics",
      progress: "0/31",
      lectures: [],
    },
    {
      id: 2,
      title: " 2 : Learn Important Sorting Techniques",
      progress: "0/7",
      lectures: [
        { id: 1, title: "Lec 1: Sorting-I", progress: "0/3" },
        { id: 2, title: "Lec 2: Sorting-II", progress: "0/4" },
      ],
    },
    {
      id: 3,
      title: " 3 : Solve Problems on Arrays [Easy -> Medium -> Hard]",
      progress: "0/40",
      lectures: [],
    },
    {
      id: 4,
      title: " 4 : Binary Search [1D, 2D Arrays, Search Space]",
      progress: "0/32",
      lectures: [],
    },
    {
      id: 5,
      title: " 5 : Searching Algorithm",
      progress: "0/2",
      lectures: [
        { id:1,title:"Lec 1: DFS",progress:"0/2" },
        {id:2,title:"Lec 2: BFS",progress:"0/2"},
      ],
    },
  ];

  // Set courses in Sidebar when LearningPage mounts
  useEffect(() => {
    setCourses(steps.map((step) => step.title));
  }, [setCourses]);

  const handleLectureClick = (lectureId) => {
    navigate(`/lecture/${lectureId}`);
  };

  return (
    <Box sx={{ width: "100%", margin: "20px auto" }}>
      {steps.map((step) => (
        <Accordion key={step.id} sx={{ marginBottom: 2, borderRadius: 2, boxShadow: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: "#f9f9f9" }}>
            <Typography variant="h6" sx={{ flex: 1 }}>{step.title}</Typography>
            <Badge
              badgeContent={step.progress}
              color="primary"
              sx={{ backgroundColor: "#f0f4ff", padding: "4px 8px", borderRadius: 1 }}
            />
          </AccordionSummary>

          <AccordionDetails sx={{ bgcolor: step.lectures.length ? "#fff9f9" : "#f9f9f9" }}>
            {step.lectures.length > 0 ? (
              step.lectures.map((lecture) => (
                <Accordion key={lecture.id} sx={{ marginY: 1, boxShadow: 0 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ paddingLeft: 4 }}>
                    <Typography variant="subtitle1"
                          onClick={() => handleLectureClick(step.title.toLowerCase())}
                          style={{ cursor: 'pointer', color: 'blue' }}>
                      {lecture.title}
                      </Typography>
                    <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
                      <Badge
                        badgeContent={lecture.progress}
                        color="secondary"
                        sx={{ padding: "2px 6px", backgroundColor: "#f5f5f5", borderRadius: 1 }}
                      />
                    </Box>
                  </AccordionSummary>
                </Accordion>
              ))
            ) : (
              <Typography variant="body2" sx={{ paddingLeft: 2 }}>
                No lectures available
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default LearningPage;
