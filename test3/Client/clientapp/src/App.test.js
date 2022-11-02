import { render, screen ,cleanup} from '@testing-library/react';
import App from './App';

import Search from './componenets/search.js';
import {useAppDIspatch,useAppSelector} from './features/redux-hooks';
import { testUseAppSelector } from './features/test-app-selector';



jest.mock("./features/redux-hooks");


describe("App",()=>{
  beforeEach(()=>{

    useAppSelector.mockImplementation(testUseAppSelector);
  });

  afterEach(()=>{

    jest.clearAllMockes();
  });



  test('name test',()=>{

    expect(true).toBe(true);

  });



  test('name test1',()=>{
    render(<Search/>);
    const element = screen.getByTestId('test1');
    expect(element).toBeInTheDocument();
    //expect(element).toHaveTextContent('');//exact text in this element
    //expect(element).toContainHtml('<div>');
    //expect(element).not.toContainHtml('<div>');

  });


  test('name test2',()=>{
    render(<Search/>);
    const element = screen.getByText('search');
    expect(element).toBeInTheDocument();
    //expect(element).toHaveTextContent('');//exact text in this element
    //expect(element).toContainHtml('<div>');
    //expect(element).not.toContainHtml('<div>');

  });
})