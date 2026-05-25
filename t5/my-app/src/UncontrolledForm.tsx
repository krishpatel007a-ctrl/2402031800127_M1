import { useRef } from 'react';
import type { FormEvent } from 'react';

function UncontrolledForm() {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(nameRef.current?.value ?? '');
        console.log(emailRef.current?.value ?? '');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Uncontrolled Form</h2>
            <label>
                Name:
                <input type="text" placeholder="Name" ref={nameRef} />
            </label>
            <label>
                Email:
                <input type="email" placeholder="Email" ref={emailRef} />
            </label>
            <button type="submit">Submit</button>
            <hr />
        </form>
    );
}

export default UncontrolledForm;