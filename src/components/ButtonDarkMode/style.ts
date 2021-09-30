import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  top: 0.1rem;
  right: 0rem;
  position: absolute;
  align-items: center;
  flex-wrap: wrap;
  p {
    color: #fff;
    margin: auto 1rem;
    font-size: 0.8rem;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 2.8rem;
    height: 1.05rem;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 0.8125rem;
    width: 0.8125rem;
    left: 0.125rem;
    bottom: 0.125rem;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
