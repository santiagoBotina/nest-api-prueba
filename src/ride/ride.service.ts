import { RequestRideDto } from './../users/dto/requestRideDto';
import { Injectable } from '@nestjs/common';
import { RideRepository } from './repository/ride-repository';

@Injectable()
export class RideService {
  constructor(private rideRepository: RideRepository) {}
  //Función para calcular distancia en Kilometros dado 2 coordenadas
  getDistanceInKm(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number {
    const R = 6371; // Radius of the earth in km
    const dLat = this.degToRad(lat2 - lat1);
    const dLon = this.degToRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.degToRad(lat1)) *
        Math.cos(this.degToRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return Number(d.toFixed(2));
  }

  degToRad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  //Función para iniciar el viaje y guardar los datos en db
  async initRide(
    requestRide: RequestRideDto,
    user_id: number,
    driver_id: number,
  ) {
    const { init_lat, init_long, final_lat, final_long } = requestRide;
    //Calcular distancia
    const distance_in_km = this.getDistanceInKm(
      Number(init_lat),
      Number(init_long),
      Number(final_lat),
      Number(final_long),
    );
    const data = {
      init_lat,
      init_long,
      final_lat,
      final_long,
      distance_in_km,
      user_id,
      driver_id,
    };

    //Guardar en base de datos
    const create = await this.rideRepository.createRide(data);
    return {
      status: 'Success',
      create,
    };
  }

  async finishRide(id: number) {
    const result = await this.rideRepository.finishRide(id);
    return result;
  }

  async getRideInfo(id: number) {
    const result = await this.rideRepository.findFull(id);
    console.log(result);
    return result;
  }
}
