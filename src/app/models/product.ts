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
   rocket:any;
   first_stage:any;
   cores:any;
   links:any;
   flickr_images: string;
    constructor(mission_name, flight_number,mission_id,launch_year = 0,launch_success,land_success,rocket, first_stage,flickr_images = ' ') {
        this.mission_name = mission_name
        this.flight_number= flight_number
        this.mission_id =mission_id
        this.launch_year =launch_year
        this.launch_success=launch_success
        this.land_success=land_success
        this.rocket=rocket
        this. first_stage= first_stage
        this.flickr_images =flickr_images
    }

}
