import { Link } from "react-router-dom"
import { Container, Title, Wrapper } from "../styled"
import styled from "styled-components";
import { SearchIcon, ShoppingCart, User2Icon } from "lucide-react";
import React, { ChangeEvent, FormEvent } from "react";

const Header = () => {
  const [search, setSearch] = React.useState<string>("");
  const handleChange = (e: ChangeEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    setSearch(target.value);
  }
  const submit = (e: FormEvent) => e.preventDefault();
  
  return (
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
              <div className="cart">
                <ShoppingCart />
                <span>12</span>
              </div>
              <div>
                <User2Icon />
              </div>
            </UserActions>
          </HeaderContent>
        </Container>
      </Wrapper>
    </HeaderRoot>
  )
}

export default Header;

const HeaderRoot = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 200px;
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
`;

const UserActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  svg {
    cursor: pointer;
  }
  .cart {
    position: relative;
    cursor: pointer;
    span {
      position: absolute;
      right: -14px;
      top: -12px;
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