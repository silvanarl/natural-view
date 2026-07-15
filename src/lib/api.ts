async function getObservations(page: number): Promise<Observation[]> {
    const response = await fetch(
        `https://api.inaturalist.org/v1/observations?page=${page}&per_page=10&order=desc&order_by=created_at`
    );

    const data: ObservationsResponse = await response.json();

    return data.results;
}

export { getObservations };