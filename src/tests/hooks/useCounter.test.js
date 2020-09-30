const { renderHook } = require("@testing-library/react-hooks")
const { useCounter } = require("../../hooks/useCounter")

describe('Test on useCounter hooks', () => {

  test('should return a value by default', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.descrement).toBe('function');
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  })

})
