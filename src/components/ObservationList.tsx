
import { getObservations } from '@/lib/api';
import Image from 'next/image';

export default async function ObservationsList() {
    const observations = await getObservations(1);

    return (
        <div>
            {observations.map((obs) => {
                const commonName = obs.taxon.preferred_common_name ?? obs.taxon.name;
                const photoUrl = obs.photos[0]?.url ?? obs.taxon.default_photo?.url;

                return (
                    <div key={obs.id} className="flex flex-row gap-4">
                        <p>{commonName}</p>
                        {photoUrl ? (
                            <Image src={photoUrl} alt={commonName} width={50} height={50} />
                        ) : (
                            <span>No image</span>
                        )}
                    </div>
                )
            })}
        </div>
    );
}