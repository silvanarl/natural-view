'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div>
            <p>Algo salió mal cargando las observaciones.</p>
            <button onClick={() => reset()}>Reintentar</button>
        </div>
    );
}