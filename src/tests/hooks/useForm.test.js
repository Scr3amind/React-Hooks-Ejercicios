import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Isaac',
        email: 'mail@mail.com'
    }

    test('debe de regresar un formulario por defecto', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [values] = result.current 
        expect(values).toEqual(initialForm);
    });

    test('debe de cambiar el valor del formulario (cambiar name) ', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current 
        
        act(() => {
            handleInputChange({
                target : {
                    name:'name', 
                    value: 'Gabriel'
                }
            })
        });
        
        const [values] = result.current 
        expect(values).toEqual({...values, name: 'Gabriel'});
    });

    test('debe de re-establecer el formulario con RESET', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, , reset] = result.current
        
        act(() => {
            reset();
        });

        const [values] = result.current 
        expect(values).toEqual(initialForm);

    });
    
    
    


    
})
