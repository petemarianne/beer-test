interface Volume {
    value: number;
    unit: string;
}

interface Temp {
    value: number;
    unit: string;
}

interface MashTemp {
    temp: Temp;
    duration: number;
}

interface Fermentation {
    temp: Temp;
}

interface Method {
    mash_temp: MashTemp[];
    fermentation: Fermentation;
    twist?: any;
}

interface Amount {
    value: number;
    unit: string;
}

interface Malt {
    name: string;
    amount: Amount;
}

interface Hop {
    name: string;
    amount: Amount;
    add: string;
    attribute: string;
}

interface Ingredients {
    malt: Malt[];
    hops: Hop[];
    yeast: string;
}

export interface BeerType {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    target_fg: number;
    target_og: number;
    ebc: number;
    srm: number;
    ph: number;
    attenuation_level: number;
    volume: Volume;
    boil_volume: Volume;
    method: Method;
    ingredients: Ingredients;
    food_pairing: string[];
    brewers_tips: string;
    contributed_by: string;
}
