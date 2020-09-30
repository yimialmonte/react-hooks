const { renderHook, act } = require('@testing-library/react-hooks');
const { useForm } = require('../../hooks/useForm');

describe('Test on useForm custom hooks', () => {
  const initialForm = {
    name: 'Yelmi',
    email: 'yelmi@gmail.com',
  };

  test('should return a initial values by default', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('should change value form name', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Maria',
        },
      });
    });

    const [values] = result.current;
    expect(values).toEqual({...initialForm, name: 'Maria'});
  });


  test('should reset the form value as initial', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Maria',
        },
      });
      reset()
    });

    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
