//src/app/species/[id]/page.tsx
import { getTaxon } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";

export default async function SpeciesDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const data = await getTaxon(Number(id));
    console.log("Taxon interna", data);
    const taxon = data.results[0];

    if (!taxon) {
        return <p>Taxon no encontrado.</p>;
    }

    const commonName = taxon.preferred_common_name ?? taxon.name;
    const photoUrl = taxon.default_photo?.url;

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
                    {taxon.wikipedia_summary && (
                        <div className="text-gray-700 mt-4" dangerouslySetInnerHTML={{ __html: taxon.wikipedia_summary }} />
                    )}
                </div>
            </div>
        </div>
    );

}