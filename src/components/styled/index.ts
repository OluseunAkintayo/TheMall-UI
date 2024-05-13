import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 1.5rem 5%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 1.2;
  color: #4b5563;
  font-weight: 700;
`;

export const SubTitle = styled.h4`
  color: #4b5563;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const Text = styled.p<{ size?: number; color?: string; }>`
  font-size: ${props => (props.size ? props.size : 16)}px;
  color: ${props => props.color || "#374151"};
  line-height: 1.25;
`;
