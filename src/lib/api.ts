export async function getObservations(page: number, per_page: number): Promise<ObservationsResponse> {
    const response = await fetch(
        `https://api.inaturalist.org/v1/observations?page=${page}&per_page=${per_page}&order=desc&order_by=created_at`
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