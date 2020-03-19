import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import {Tabs} from '../Tabs'
import React from "react";

test('should call handleChange on click', ()=>{
    const tab = "tab1";
    const tabs = [tab, 'tab2']
    const handleChange = jest.fn();
    const component = render(<Tabs tabs={tabs} selected={tab} onChange={handleChange}/>)
    fireEvent.click(component.getByText(tab));
    expect(handleChange).toBeCalledWith(tab);
    }
);