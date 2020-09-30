const { renderHook, act } = require('@testing-library/react-hooks');
const { useCounter } = require('../../hooks/useCounter');

describe('Test on useCounter hooks', () => {
  test('should return a value by default', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.descrement).toBe('function');
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('should have a counter value equal to the value', () => {
    const value = 100;
    const { result } = renderHook(() => useCounter(value));
    expect(result.current.counter).toBe(value);
  });

  test('should increment the counter by one', () => {
    const value = 100;
    const { result } = renderHook(() => useCounter(value));
    const { increment } = result.current;
    act(() => {
      increment();
    });

    const { counter } = result.current;

    expect(counter).toBe(value + 1);
  });

  test('should descrement the counter by one', () => {
    const value = 100;
    const { result } = renderHook(() => useCounter(value));
    const { descrement } = result.current;
    act(() => {
      descrement();
    });
    const { counter } = result.current;
    expect(counter).toBe(value - 1);
  });

  test('should reset value as the initial', () => {
    const initialValue = 10;
    const { result } = renderHook(() => useCounter(initialValue));
    const { increment, reset } = result.current;
    act(() => {
      increment();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(initialValue);
  });
});
