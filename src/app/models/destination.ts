export class Destination {
    public location_Id: number=0;
    public name: string='';
    public latitude: string='';
    public longitude: string='';
    public num_reviews: number=0;
    public timezone: string='';
    public location_string: string='';
    
    public constructor(init?:Partial<Destination>) {
        Object.assign(this, init);
    }
    
}
