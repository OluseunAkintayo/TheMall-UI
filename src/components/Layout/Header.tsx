import { Link } from "react-router-dom"
import { Container, Title, Wrapper } from "../styled"
import styled from "styled-components";
import { SearchIcon, ShoppingCart, User2Icon } from "lucide-react";
import React, { ChangeEvent, FormEvent } from "react";
import SearchModal from "./SearchModal";

const Header = () => {
  const [search, setSearch] = React.useState<string>("");
  const handleChange = (e: ChangeEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    setSearch(target.value);
  }
  const submit = (e: FormEvent) => e.preventDefault();

  const [searchModal, setSearchModal] = React.useState<boolean>(true);

  return (
    <React.Fragment>
      <HeaderRoot>
        <Wrapper>
          <Container>
            <HeaderContent>
              <Link to="/">
                <Title>E-Mall</Title>
              </Link>
              <Search>
                <form onSubmit={submit}>
                  <SearchIcon />
                  <input type="text" placeholder="Search" onChange={handleChange} value={search} />
                  <input type="hidden" />
                </form>
              </Search>
              <UserActions className="user-actions">
                <button onClick={() => setSearchModal(true)}>
                  <SearchIcon />
                </button>
                <button className="cart">
                  <ShoppingCart />
                  <span>12</span>
                </button>
                <button>
                  <User2Icon />
                </button>
              </UserActions>
            </HeaderContent>
          </Container>
        </Wrapper>
      </HeaderRoot>
      <React.Fragment>
        {
          searchModal && <SearchModal open={searchModal} close={() => setSearchModal(false)} />
        }
      </React.Fragment>
    </React.Fragment>
  )
}

export default Header;

const HeaderRoot = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Search = styled.div`
  form {
    max-width: 360px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid #9ca3af;
    /* height: 28px; */
    padding: 4px 10px;
    svg {
      stroke: #9ca3af;
      width: 16px;
    }
    input {
      all: unset;
      color: #9ca3af;
      width: 100%;
      font-size: 14px;
      letter-spacing: 0.25px;
      &::placeholder {
        color: #9ca3af;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const UserActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  button {
    all: unset;
    width: 24px;
    height: 24px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    padding: 0.25rem;
    transition: ease-in-out 0.3s;
    &:hover {
      background-color: #9ca3af;
      svg {
        stroke: #ffffff;
      }
    }
  }
  svg {
    cursor: pointer;
    width: 18px;
    transition: ease-in-out 0.3s;
  }
  .cart {
    position: relative;
    cursor: pointer;
    span {
      position: absolute;
      right: -10px;
      top: -8px;
      background-color: #374151;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      font-size: 9px;
      color: #ffffff;
      display: grid;
      place-items: center;
      user-select: none;
    }
  }
`;
