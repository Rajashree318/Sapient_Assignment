export class Product {
  filter(arg0: (t: any) => boolean): any {
    throw new Error("Method not implemented.");
  }
    mission_name: string;
    flight_number: number;
   mission_id: any;
   launch_year: number;
   land_success:string;
   launch_success:any;
   rocket:string;
   first_stage:boolean;
   cores:boolean;
   links:any;
   flickr_images: string;
    constructor(mission_name, flight_number,mission_id,launch_year = 0,launch_success,land_success,rocket,flickr_images = ' ') {
        this.mission_name = mission_name
        this.flight_number= flight_number
        this.mission_id =mission_id
        this.launch_year =launch_year
        this.launch_success=launch_success
        this.land_success=land_success
    this.rocket=rocket
        this.flickr_images =flickr_images
    }

}
