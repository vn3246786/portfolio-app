import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses }  from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Code, LaptopChromebook,} from '@mui/icons-material';

export default function CustomizedTimeline() {
  return (
    <Timeline sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <Code/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Skills
          </Typography>
          <Typography>{"HTML, css, javascript"}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopChromebook/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Technologies
          </Typography>
          <Typography>React, express, nodejs, mongodb</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}