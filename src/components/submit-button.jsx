'use client'
import { useFormStatus } from "react-dom";

function SubmitButton({ formAction, className, children }) {
    const { pending } = useFormStatus()

    return (
        <button formAction={formAction} className={className} disabled={pending}>
            {pending
                ? 'Realizando operación...'
                : children
            }
        </button>
    );
}

export default SubmitButton;