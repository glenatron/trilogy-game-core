export interface IMoveSummary {

    name: string;

    trigger: string;

    // can be more than one- comma separated.
    stat: string;

    fullSuccess: string;

    intermediate: string;

    failure: string;

    notes: string;

    source: string;
}
