import { getObservation } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";

export default async function ObservationDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const data = await getObservation(Number(id));
    const observation = data.results[0];

    if (!observation) {
        return <p>Observación no encontrada.</p>;
    }

    const commonName = observation.taxon.preferred_common_name ?? observation.taxon.name;
    const photoUrl = observation.photos[0]?.url ?? observation.taxon.default_photo?.url;

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto p-4">
                <Link href="/" className="text-blue-600 hover:underline inline-block mb-4">
                    &larr; Volver al inicio
                </Link>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-bold mb-4">{commonName}</h1>

                    {photoUrl ? (
                        <div className="relative w-full h-96 mb-4">
                            <Image
                                src={photoUrl}
                                alt={commonName}
                                className="object-contain rounded-lg"
                                fill
                            />


                        </div>
                    ) : (
                        <p className="text-red-500 mb-4">No hay imagen disponible.</p>
                    )}
                </div>
            </div>
        </div>
    );


}