import styled from 'styled-components'; 

export const Picker = styled.div`
    /* position: relative; */
    position: absolute;
    right: 0.5rem;
`

export const Swatch = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 8px;
    border: 2px solid whitesmoke;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 1;
`

export const Popover = styled.div`
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    border-radius: 9px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    z-index: 2;
`