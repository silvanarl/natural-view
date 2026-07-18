export async function getObservations(page: number, per_page: number): Promise<ObservationsResponse> {
    const response = await fetch(
        `https://api.inaturalist.org/v1/observations/?page=${page}&per_page=${per_page}&order=desc&order_by=created_at`
    );

    const data: ObservationsResponse = await response.json();
    return data;
}

export async function getObservation(id: number): Promise<ObservationsResponse> {
    const response = await fetch(
        `https://api.inaturalist.org/v1/observations/${id}`
    );

    const data: ObservationsResponse = await response.json();
    return data;
}

export async function getObservationsSpeciesCount(page: number, per_page: number): Promise<SpeciesCountsResponse> {
    const response = await fetch(
        `https://api.inaturalist.org/v1/observations/species_counts?page=${page}&per_page=${per_page}&order=desc&order_by=created_at`
    );

    const data: SpeciesCountsResponse = await response.json();
    return data;
}

export async function getTaxon(id: number): Promise<TaxonResponse> {
    const response = await fetch(
        `https://api.inaturalist.org/v1/taxa/${id}`
    );

    const data: TaxonResponse = await response.json();
    return data;
}
