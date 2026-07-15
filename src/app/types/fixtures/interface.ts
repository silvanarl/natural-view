interface ObservationsResponse {
    total_results: number;
    page: number;
    per_page: number;
    results: Observation[];
}

interface Observation {
    observed_on: string;
    id: number;
    taxon: Taxon;
    time_observed_at: string | null;
    captive: boolean;
    user: User;
    photos: Photo[];
}

interface Taxon {
    provisional: boolean;
    endemic: boolean;
    id: number;
    preferred_common_name: string | null;
    is_active: boolean;
    ancestry: string;
    min_species_ancestry: string;
    min_species_taxon_id: number;
    rank_level: number;
    threatened: boolean;
    introduced: boolean;
    native: boolean;
    parent_id: number | null;
    name: string;
    rank: string;
    extinct: boolean;
    created_at: string;
    default_photo: Photo | null;
    taxon_changes_count: number;
    taxon_schemes_count: number;
    observations_count: number;
    photos_locked: boolean;
    universal_search_rank: number;
    wikipedia_url: string;
    iconic_taxon_name: string;
}
interface Photo {
    id: number;
    license_code: string | null;
    url: string;
    attribution: string;
    hidden: boolean;
    original_dimensions: {
        width: number;
        height: number;
    };
    square_url: string | null;
    medium_url: string | null;
}
interface User {
    id: number;
    login: string;
    name: string;
    created_at: string;
    icon: string;
    observations_count: number;
    identifications_count: number;
    journal_posts_count: number;
    activity_count: number;
    species_count: number;
}