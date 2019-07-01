import styled from "styled-components";
import { theme } from "../config";

export default styled.div`
  border-radius: 3px;
  background: lightgray;

  header {
    background: ${theme.navgrey};
    border-bottom: 3px solid ${theme.activeblue};
    padding: 20px;
    color: white;

    h2 {
      font-size: 3rem;
      font-family: ${theme.sideNavFont};
    }
  }

  .help-content {
    font-size: 1.6rem;
    padding: 20px;
  }
`;
