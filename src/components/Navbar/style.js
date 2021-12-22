import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: #fff;
  height: 90px;
  width: 100%;
  border-bottom: 1px solid #c4c7cc;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 30px 5px 30px;

    .navbar__logo {
      p {
        color: rgb(12, 170, 65);
        font-size: 2rem;
        font-weight: 900;
      }
    }

    .navbar__icons {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .icons {
        font-size: 35px;
        color: #999999;
        margin-right: 15px;
      }
    }
  }
`;
