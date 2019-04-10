import React from 'react';
import * as rtl from 'react-testing-library';
import App from './App';

afterEach(rtl.cleanup)

describe('App Component', () => {
  it('renders without crashing', () => {
    const wrapper = rtl.render(<App />)
    expect(wrapper.getByText(/Lambda Little League/i))
    expect(wrapper.getByText(/number of /i))
  });
  describe('Ball Button', () => {
    it('adds 1 onClick', () => {
      const wrapper = rtl.render(<App />)
      rtl.fireEvent.click(wrapper.getByTestId('balls'));
      expect(wrapper.getByText(/Balls: 1/i))
    })
    it('resets both balls and strikes to 0 onClick when balls = 4', () => {
      const wrapper = rtl.render(<App />)
      rtl.fireEvent.click(wrapper.getByTestId('balls'));
      rtl.fireEvent.click(wrapper.getByTestId('balls'));
      rtl.fireEvent.click(wrapper.getByTestId('balls'));
      rtl.fireEvent.click(wrapper.getByTestId('strikes'));
      rtl.fireEvent.click(wrapper.getByTestId('balls'));
      expect(wrapper.getByText(/Balls: 0/i))
      expect(wrapper.getByText(/Strikes: 0/i))
    })
  })

  describe('Strikes Button', () => {
    it('adds 1 onClick', () => {
      const wrapper = rtl.render(<App />)
      rtl.fireEvent.click(wrapper.getByTestId('strikes'));
      expect(wrapper.getByText(/Strikes: 1/i))
    })
    it('resets both balls and strikes to 0 onClick when strikes = 3', () => {
      const wrapper = rtl.render(<App />)
      rtl.fireEvent.click(wrapper.getByTestId('balls'));
      rtl.fireEvent.click(wrapper.getByTestId('strikes'));
      rtl.fireEvent.click(wrapper.getByTestId('strikes'));
      rtl.fireEvent.click(wrapper.getByTestId('strikes'));
      rtl.fireEvent.click(wrapper.getByTestId('strikes'));

      expect(wrapper.getByText(/Balls: 0/i))
      expect(wrapper.getByText(/Strikes: 1/i))
    })
  })

  describe('Fouls Button', () => {
    it('adds 1 onClick', () => {
      const wrapper = rtl.render(<App />)
      rtl.fireEvent.click(wrapper.getByTestId('fouls'));
      expect(wrapper.getByText(/Fouls: 1/i))
    })
    it('Adds 1 to strikes when strikes = 0', () => {
      const wrapper = rtl.render(<App />)
      rtl.fireEvent.click(wrapper.getByTestId('fouls'));
      expect(wrapper.getByText(/Strikes: 1/i))
      expect(wrapper.getByText(/Fouls: 1/i))
    })
    it('Adds 2 to strikes when strikes = 1', () => {
      const wrapper = rtl.render(<App />)
      rtl.fireEvent.click(wrapper.getByTestId('strikes'));
      rtl.fireEvent.click(wrapper.getByTestId('fouls'));
      expect(wrapper.getByText(/Strikes: 0/i))
      expect(wrapper.getByText(/Fouls: 1/i))
    })
    it('does not add strikes when strikes = 2', () => {
      const wrapper = rtl.render(<App />)
      rtl.fireEvent.click(wrapper.getByTestId('strikes'));
      rtl.fireEvent.click(wrapper.getByTestId('strikes'));
      rtl.fireEvent.click(wrapper.getByTestId('fouls'));
      expect(wrapper.getByText(/Strikes: 2/i))
      expect(wrapper.getByText(/Fouls: 1/i))
    })
  })
  describe('Hits Button', () => {
    it('adds 1 onClick', () => {
      const wrapper = rtl.render(<App />)
      rtl.fireEvent.click(wrapper.getByTestId('hits'));
      expect(wrapper.getByText(/1/i))
    })
    it('adds like it should onClick', async () => {
      const wrapper = rtl.render(<App />)
      rtl.fireEvent.click(wrapper.getByTestId('hits'));
      rtl.fireEvent.click(wrapper.getByTestId('hits'));

      expect(wrapper.getByText(/Hits: 2/i))
    })
    it('resets both balls and strikes', async () => {
      const wrapper = rtl.render(<App />)
      rtl.fireEvent.click(wrapper.getByTestId('strikes'));
      rtl.fireEvent.click(wrapper.getByTestId('balls'));
      rtl.fireEvent.click(wrapper.getByTestId('hits'));

      expect(wrapper.getByText(/Strikes: 0/i))
      expect(wrapper.getByText(/Balls: 0/i))
      expect(wrapper.getByText(/Hits: 1/i))
    })
  })
})

