import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    
    test('debe de retornar los valores por defecto', () => {
        
        const {result} = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');

    });

    test('debe de iniciar con el counter en 100', () => {
        
        const {result} = renderHook(() => useCounter(100));

        expect(result.current.counter).toBe(100);

    });

    test('debe de incrementar el counter + 1', () => {
        const initialValue = 100;
        const {result} = renderHook(() => useCounter(initialValue));
        const {increment} = result.current;

        act( () => {
            increment();
        });

        const {counter} = result.current;
        expect(counter).toBe(initialValue + 1);
        
    });

    test('debe de decrementar el counter - 1', () => {
        const initialValue = 10;
        const {result} = renderHook(() => useCounter(initialValue));
        const {decrement} = result.current;

        act( () => {
            decrement();
        });

        const {counter} = result.current;
        expect(counter).toBe(initialValue - 1);
        
    });

    test('debe de resetear el counter', () => {
        const initialValue = 50;
        const {result} = renderHook(() => useCounter(initialValue));
        const {decrement} = result.current;
        const {reset} = result.current;

        act( () => {
            decrement();
            reset();
        });

        const {counter} = result.current;
        expect(counter).toBe(initialValue);
        
    });

})
