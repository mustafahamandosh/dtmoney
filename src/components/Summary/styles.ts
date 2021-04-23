import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
  
  div{
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    
    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    strong{
      font-size: 1.5rem;
      line-height: 3rem;
      font-weight: 500;
      margin-top: 1rem;
      display: block;
    }
    
    &.highlight-total{
      background: var(--green);
      color: #fff;
    }
  }
`