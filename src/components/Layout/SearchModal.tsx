import { SearchIcon } from "lucide-react";
import { MouseEventHandler } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface ISearchModal {
  open: boolean;
  close: () => void;
}

const SearchModal = ({ open, close }: ISearchModal) => {
  const preventCloseModal: MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation();
  return createPortal(
    <ModalBackground open={open} onClick={close}>
      <ModalContainer onClick={preventCloseModal}>
        <SearchBox>
          <form>
            <SearchIcon />
            <input autoFocus type="text" placeholder="Search" />
          </form>
        </SearchBox>
      </ModalContainer>
    </ModalBackground>,
    document.body
  )
}

export default SearchModal;

const ModalBackground = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateY(${props => props.open ? 0 : -110}%);

  transition: ease-in-out 0.3s;
`;
const ModalContainer = styled.div`
  height: 70px;
  display: grid;
  place-items: center;
  background-color: #fafafa;
  padding: 0 4%;
`;
const SearchBox = styled.div`
  width: 100%;
  form {
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