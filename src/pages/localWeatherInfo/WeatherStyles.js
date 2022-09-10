import styled from "@emotion/styled";
import { Button, Paper } from "@mui/material";

export const WeatherPaper = styled(Paper)`
  display: flex;
  flex-direction: column;

  min-width: 100%;
  background-color: rgba(102,70,3,1);
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem 0;

  span {
    margin: .5rem 0;
    font-weight: bold;
    font-size: 1.4rem;
    /* color: rgba(100%, 77.8%, 20.2%, 100%); */
    color: #FFFFFF;

    span {
      color: rgba(100%, 77.8%, 20.2%, 100%);
    }
  }
`;

export const UpdateDataButton = styled(Button)`
  background-color: rgba(100%, 77.8%, 20.2%, 100%);
  color: #FFFFFF;
  margin: 2rem 0 1rem 0;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    background-color: rgba(102,70,3,1); 
  }
`;
