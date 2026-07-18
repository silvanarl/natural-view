
import { getObservations, getObservationsSpeciesCount } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';

export default async function ObservationsList({ page, perPage }: { page: number; perPage: number }) {
    const observations = await getObservationsSpeciesCount(page, perPage);

    const MAX_RESULTS = 10000;
    const maxPage = Math.floor(MAX_RESULTS / perPage);

    const hasNextPage = page < maxPage && (page * perPage) < observations.total_results;
    const hasPrevPage = page > 1;
    return (
        <>
            <div className="flex flex-wrap gap-6 p-2 m-2 ">
                {observations.results.map((obs) => {
                    const commonName = obs.taxon?.preferred_common_name ?? obs.taxon?.name;
                    const photoUrl = obs.taxon?.default_photo?.url;

                    return (
                        <Link key={obs.taxon.id} href={`/species/${obs.taxon.id}`}>
                            <div className="flex  gap-4 flex-col border-2 rounded-md p-2 items-center justify-center bg-white dark:bg-[#242A26] border-[#DDD8CE] dark:border-[#37403A]">
                                <h3 className="text-xl italic font-serif">Taxon name: {obs.taxon.name}</h3>
                                <p className="text-lg font-semibold">{commonName}</p>
                                {photoUrl ? (
                                    <Image src={photoUrl} alt={commonName ?? 'Especie sin nombre disponible'} width={150} height={150} />
                                ) : (
                                    <span className="text-red-500 border-red-500">No image</span>
                                )}
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className="flex gap-4 mt-4">
                {hasPrevPage && <Link className="bg-blue-500 text-white px-4 py-2 rounded" href={`/?page=${page - 1}`}>Anterior</Link>}
                {hasNextPage && <Link className="bg-blue-500 text-white px-4 py-2 rounded" href={`/?page=${page + 1}`}>Siguiente</Link>}
            </div>
        </>
    );
}