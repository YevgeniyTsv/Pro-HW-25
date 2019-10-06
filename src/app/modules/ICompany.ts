export interface ICompany {
    readonly company: company;
    getCompanyName(): string;
    getCompanyPersonnel(): number;
}

export interface company {
    name: string;
    personnel: number;
    rating: number;
}
